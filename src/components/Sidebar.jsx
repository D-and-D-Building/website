import React from 'react'

export const Sidebar = () => {
  return (
    <div className=''>
      <div className="">
        <img src="" alt="logo" />
      </div>

      <div className="mt-20">
        <ul className='divide-y divide-solid'>
          <a href="/profile" className='block p-10'>Profile</a>
          <a href="/payments" className='block p-10'>Payments</a>
          <a href="/notifications" className='block p-10'>Notifications</a>
          <a href="/logout" className='block p-10'>Logout</a>
        </ul>
      </div>
    </div>
  )
}
