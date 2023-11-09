import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const Layout = ({ children }) => {
    return (
        <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex">
                <div className="min-h-screen bg-indigo-600 max-w-[250px] relative">
                    <Sidebar />
                </div>

                <main className='flex-grow'>
                    {children}
                </main>

            </div>
        </div>
    )
}
