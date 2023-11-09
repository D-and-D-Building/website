import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom';

export const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from your API here and update the state
    // For now, we'll use a static array of notifications
    setNotifications([
      { id: 1, subject: 'Rent Due', message: 'Your rent is due on 2022-03-01.', date: '2022-02-20' },
      { id: 2, subject: 'Maintenance Update', message: 'The elevator maintenance is completed.', date: '2022-02-18' },
      // Add more notifications as needed
    ]);
  }, []);

  return (
    <Layout >
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      <div className="mb-4">
        {notifications.map(notification => (
          <Link key={notification.id} to={{ pathname: `/notifications/${notification.id}`, state: { notification } }} className="block border-b border-gray-200 py-4">
          <h2 className="text-xl font-bold">{notification.subject}</h2>
          <p>{notification.message}</p>
          <p className="text-sm text-gray-500">{notification.date}</p>
        </Link>
        ))}
      </div>
    </div>

    </Layout>
  )
}
