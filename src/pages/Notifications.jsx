import React from 'react'
import { Layout } from '../components/Layout'
import { Personal } from './Personal'
import { Announcements } from './Announcements'

export const Notifications = () => {
  return (
    <Layout >

      <div className="flex justify-around">
        <Personal/>
        <Announcements/>
      </div>


    </Layout>
  )
}
