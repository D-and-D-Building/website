import { Layout } from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // After logout, navigate to the login page
    navigate('/');
  };

  const handleCancel = () => {
    // Navigate back to the home page
    navigate('/home');
  };

  return (
    <Layout>
      <div className="flex items-center justify-center py-12">
        <div className="w-full space-y-8">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Are you sure you want to logout?</h1>

          <div className="flex justify-center space-x-4">
            <button
              type='button'
              className='py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none'
            >
              <Link to="/sign-in">Yes</Link>
            </button>
            <button
              type='button'
              className='py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none'
              onClick={handleCancel}
            >
              No
            </button>
          </div>
        </div>
      </div>

    </Layout>
  )
}
