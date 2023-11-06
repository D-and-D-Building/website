import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Payment } from './Payment'
import { Receipts } from './Receipts'

export const Payments = () => {
  const [value, setValue] = useState("")


  return (
    <Layout>
      <div className="flex justify-around">
        <button type='button' >How to pay</button>
        <button type="button" >Receipts</button>
        <Payment/>
        <Receipts/>
      </div>
    </Layout>
  )
}
