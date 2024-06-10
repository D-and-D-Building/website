import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarContext from '../sidebarContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <div className='flex justify-between  bg-indigo-400 p-10'>
      <div className="flex">
        <FontAwesomeIcon icon={faBars} onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="ml-5">D&D Building</h1>
      </div>


      <div className="space-x-6">
        <NavLink
          to="/notifications"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FontAwesomeIcon icon={faBell} />
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Link to="/profile">Profile</Link>
        </NavLink>


      </div>
    </div>
  )
}
