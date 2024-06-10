import SidebarContext from './sidebarContext';
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Notifications } from './pages/Notifications'
import { Payments } from './pages/Payments'
import { Profile } from './pages/Profile'
import { useState } from 'react';
import { Notification } from './pages/Notification';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Properties from './pages/Properties';
import AddProperty from './components/AddProperty';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path='/profile' element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile />} />
          </Route>
          
          <Route path="/properties" element={<Properties />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notifications/:id" element={<Notification />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </Router>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
/>
    </SidebarContext.Provider>
  )
}

export default App
