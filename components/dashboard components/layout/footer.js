import { Avatar, SvgIcon } from '@mui/material'
import { getSession, signOut } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import SVGIcons from '../utils/medias/svg'

function Footer() {


    const [session, setSession] = useState(null)

    const fetchSession = async () => {
        const result = await getSession()
        setSession(result)
    }

    const handleSignout = () => {
        signOut({ callbackUrl: '/login' })
    }

    const getInitials = (name) => {
        if(name){
            const [firstName, lastName] = name.split(" ");
            return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
        }        
      };

    useEffect(() => {
        if (!session) {
            fetchSession()
        }
    }, [session])


    return (
        <div className='footer-container' >
            <div className='footer-inner-div'>
                <Avatar >{getInitials(session?.user?.name)}</Avatar>
                <span className='text-[#5B5B5B]'>{session?.user?.name}</span>
            </div>
            <div onClick={handleSignout} className='footer-logout-icon'>
                <SVGIcons.LogoutIcon />
            </div>
        </div>
    )
}

export default Footer
