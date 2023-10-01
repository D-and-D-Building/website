import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Logout } from './pages/Logout'
import { Notifications } from './pages/Notifications'
import { Receipts } from './pages/Receipts'
import { Profile } from './pages/Profile'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
