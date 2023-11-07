import { Layout } from '../components/Layout'

export const Profile = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        <div className="mb-4">
          <h2 className="text-xl font-bold">Personal Information</h2>
          <p className="text-gray-700">Name: John Doe</p>
          <p className="text-gray-700">Email: johndoe@example.com</p>
          <p className="text-gray-700">Mobile number: 0712345678</p>
          <p className="text-gray-700">Tenant since: January 2022</p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
    </Layout>
  )
}
