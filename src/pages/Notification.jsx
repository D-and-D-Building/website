import { useLocation } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const Notification = () => {
    const location = useLocation();
    const { notification } = location.state;
    console.log("Am happy");

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">{notification.subject}</h1>
                <p>{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.date}</p>
            </div>
        </Layout>
    )
}
