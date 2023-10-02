import React from 'react'

export const Header = () => {
  return (
    <div className='flex justify-between bg-gray-400'>
      <div className="">
        <h1>D&D Building</h1>
      </div>


      <div className="flex">
        <h5>Notifications</h5>
        <h5>Profile</h5>
      </div>
    </div>
  )
}
