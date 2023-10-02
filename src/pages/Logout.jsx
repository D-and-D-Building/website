import React from 'react'
import { Layout } from '../components/Layout'

export const Logout = () => {
  return (
    <Layout>
      <h1>Are you sure you want to logout?</h1>

      <div className="">
        <button type='submit'>Yes</button>
        <button type='submit'>No</button>
      </div>

    </Layout>
  )
}
