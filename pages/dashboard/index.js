import SessionLoader from '@/components/Auth/SessionLoader'
import Layout from '@/components/dashboard components/layout/layout'
import { signOut } from 'next-auth/react'
import React from 'react'

function Index() {
    return (
        <SessionLoader>
            <Layout >
                
            </Layout>
        </SessionLoader>
    )
}

export default Index
