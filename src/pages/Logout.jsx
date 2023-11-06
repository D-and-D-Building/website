import React from 'react'
import { Layout } from '../components/Layout'

export const Logout = () => {
  return (
    <Layout>
      <h1>Are you sure you want to logout?</h1>

      <div className="">
        <button type='submit' className='mr-5 bg-black rounded text-white'>Yes</button>
        <button type='submit' className='bg-black rounded text-white'>No</button>
      </div>

    </Layout>
  )
}
