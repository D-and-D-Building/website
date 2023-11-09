import { Layout } from '../components/Layout'
import { useNavigate } from 'react-router-dom';

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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Are you sure you want to logout?</h1>

          <div className="flex justify-center space-x-4">
            <button
              type='button'
              className='py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none'
              onClick={handleLogout}
            >
              Yes
            </button>
            <button
              type='button'
              className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none'
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
