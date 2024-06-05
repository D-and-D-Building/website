import SidebarContext from './sidebarContext';
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Logout } from './pages/Logout'
import { Notifications } from './pages/Notifications'
import { Payments } from './pages/Payments'
import { Profile } from './pages/Profile'
import { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { Notification } from './pages/Notification';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notifications/:id" element={<Notification />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </SidebarContext.Provider>
  )
}

export default App
