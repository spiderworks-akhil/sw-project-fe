import React from 'react'
import SideBar from './sidebar'
import Footer from './footer'
import Header from './header'

function Layout({ children, title }) {
    return (
        
        <div className='flex'>
            <div className=''>
                <SideBar />
            </div>
            <div className='w-full'>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
        
      
    )
}
export default Layout
