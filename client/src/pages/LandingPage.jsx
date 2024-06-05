import { Link } from 'react-router-dom'

export const LandingPage = () => {
    
  return (
    <div>
        <h2>
            D&D Building is located along Nakuru-Nyahururu highway.
        </h2>
        <h2>
            Decent rooms,security is guaranteed, plenty of water.
        </h2>

        <button className='rounded bg-indigo-400 p-2 onhover:bg-indigo-600' >
            <Link to="/sign-in">Get Started</Link>
            </button>
    </div>
  )
}
