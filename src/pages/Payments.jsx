import React from 'react'
import { Layout } from '../components/Layout'
import { Payment } from './Payment'
import { Receipts } from './Receipts'

export const Payments = () => {
  return (
    <Layout>
      <div className="flex justify-around">
        <Payment/>
        <Receipts/>
      </div>
    </Layout>
  )
}
