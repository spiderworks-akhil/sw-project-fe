import React from 'react'
import SideBar from './sidebar'
import Footer from './footer'
import Header from './header'
import Head from 'next/head'

function Layout({ children, title }) {
    return (

        <>
            <Head>
                <link rel="icon" href="https://www.spiderworks.in/favicon.ico" />
                <title>Spider Works</title>
            </Head>
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
        </>

    )
}
export default Layout
