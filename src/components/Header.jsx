import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className='flex justify-between bg-gray-400 p-20'>
      <div className="">
        <h1>D&D Building</h1>
      </div>


      <div className="space-x-6">
        <NavLink
          to="/notifications"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Notifications
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Login/Profile
        </NavLink>

        
      </div>
    </div>
  )
}
