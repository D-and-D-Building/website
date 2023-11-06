import React,{ useContext } from "react"
import SidebarContext from "../sidebarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCreditCard, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <ul className='divide-y divide-solid'>
        <a href="/profile" className='block p-10'>
          <FontAwesomeIcon icon={faUser} />
          {isSidebarOpen && ' Profile'}
        </a>
        <a href="/payments" className='block p-10'>
          <FontAwesomeIcon icon={faCreditCard} />
          {isSidebarOpen && ' Payments'}
        </a>
        <a href="/notifications" className='block p-10'>
          <FontAwesomeIcon icon={faBell} />
          {isSidebarOpen && ' Notifications'}
        </a>
        <a href="/logout" className='block p-10'>
          <FontAwesomeIcon icon={faSignOutAlt} />
          {isSidebarOpen && ' Logout'}
        </a>
      </ul>
    </div>
  )
}
