import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Image from 'next/image';
import { getSession } from 'next-auth/react';
import LoginForm from '@/components/login components/loginform';

function Login() {

    const router = useRouter()

    const { data: session, status } = getSession();
    
    useEffect(() => {
      if (status == 'authenticated') {
        router.back()
      }
    }, [session])

    return (
        <div className="login-page-sec flex items-center">

            <div className='log-left'>
                <Image unoptimized src={'/img/log.png'} alt={"banner image"} width={343} height={457} />
            </div>


            <div className='log-right'>
                <div className='log-rht-cntr'>

                    <h1 className="brand-name">Welcome Back</h1>
                    <p>To continue, please enter your email and password </p>
                    <LoginForm />

                </div>
            </div>

        </div>
    )
}

export default Login
