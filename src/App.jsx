import SidebarContext from './sidebarContext';
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Logout } from './pages/Logout'
import { Notifications } from './pages/Notifications'
import { Payments } from './pages/Payments'
import { Profile } from './pages/Profile'
import { useState } from 'react';
import { LandingPage } from './pages/LandingPage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/payment" element={<Logout />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </SidebarContext.Provider>
  )
}

export default App
