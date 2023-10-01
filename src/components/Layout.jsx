import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

export const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <div className="min-h-screen bg-gray-600 max-w-[250px] relative">
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col">
                <Header />
                <main className='flex-grow'>
                    {children}
                </main>
                <Footer />
            </div>


        </div>
    )
}
