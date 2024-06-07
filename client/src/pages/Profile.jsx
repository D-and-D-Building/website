import { useState } from 'react'
import { Layout } from '../components/Layout'
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const { name, email } = formData;

  function onLogout() {
    auth.signOut()
    navigate("/")
  }

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name){
        //update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        //update name in the firestore
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        })
      }
      toast.success("Profile details updated successfully")
    } catch (error) {
      toast.error("Could not update profile details")
    }
  }

  return (
    <Layout>

      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>

        <div className="w-full md:w-[50%] mt-6 px-3">
          <form >
            <input type="text" id='name' value={name} disabled ={!changeDetail} onChange={onChange} className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`}/>

            <input type="email" id='email' value={email} disabled  className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out' />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <button type='button' onClick={() => {
                changeDetail && onSubmit();
                setChangeDetail((prevState)=> !prevState)
              }}
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center transition ease-in-out duration-200">
               {changeDetail ? 'Save' : 'Edit Profile'}
              </button>

              <button type='button' onClick={onLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200">
                Sign Out
              </button>
            </div>
          </form>
        </div>
      </section>


    </Layout>
  )
}
