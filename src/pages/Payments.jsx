import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout'


export const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payments from your API here and update the state
    // For now, we'll use a static array of payments
    setPayments([
      { id: 1, date: '2022-01-01', amount: 1000, method: 'Mpesa' },
      { id: 2, date: '2022-02-01', amount: 1000, method: 'Bank Transfer' },
      // Add more payments as needed
    ]);
  }, []);


  return (
    <Layout>
      <div className="flex p-5">
        <div className="p-2">
          <h1 className="text-2xl font-bold mb-4 border-b border-gray-200 py-4">Payments</h1>

          <div className="flex space-x-20">

            <div className="">

              <div className="mb-4 border-b border-gray-200 py-4">
                <h2 className="text-xl font-bold">Balance Information</h2>
                <p>Month bill: ksh: 20,00</p>
                <p>Rent Arrears as at today: ksh: 20,000</p>
              </div>

              <div className="mb-4 border-b border-gray-200 py-4">
                <h2 className="text-xl font-bold">Make a Payment</h2>
                <form>
                  <label htmlFor="amount">Amount</label>
                  <input type="number" id="amount" name="amount" className="border border-gray-300" />
                  <label htmlFor="method">Payment Method</label>
                  <select id="method" name="method" className="border border-gray-300">
                    <option value="Mpesa">Mpesa</option>
                    <option value="bank transfer">Bank Transfer</option>
                  </select>
                  <input type="submit" value="Pay Now" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                </form>
              </div>
            </div>

            <div className="">

              <div className="mb-4 border-b border-gray-200 py-4">
                <h2 className="text-xl font-bold">Payment History</h2>
                <table className="table-auto space-x-4">
                  <thead>
                    <tr>
                      <th className="px-4">Date</th>
                      <th className="px-4">Amount</th>
                      <th className="px-4">Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map(payment => (
                      <tr key={payment.id}>
                        <td className="px-4">{payment.date}</td>
                        <td className="px-4">${payment.amount}</td>
                        <td className="px-4">{payment.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  )
}
