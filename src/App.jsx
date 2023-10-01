import './App.css'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Logout } from './components/Logout'
import { Notifications } from './components/Notifications'
import { Receipts } from './components/Receipts'
import { Profile } from './components/Profile'

function App() {
  

  return (
    <>
      <Login />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/receipts" element={<Receipts/>} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
