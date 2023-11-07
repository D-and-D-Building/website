import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Payment } from './Payment'
import { Receipts } from './Receipts'

export const Payments = () => {
  const [value, setValue] = useState("")


  return (
    <Layout>
      <div className="flex justify-around">
       
        <Payment/>
        <Receipts/>
      </div>
    </Layout>
  )
}
