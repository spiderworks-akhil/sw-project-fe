import { Typography } from '@mui/material'
import React from 'react'
import SVGIcons from '../utils/medias/svg'
import Head from 'next/head'

function Header() {
    return (
      
            <div style={{ width: '100%' }} className='header-container'>
                <div className='flex gap-10 items-center w-[80%]'>
                    <div>
                        <h3 className='header-title'>
                            Work Board
                        </h3>
                    </div>

                    {/* logged in */}
                    <div className='header-logged-time-div'>
                        {SVGIcons.LoggedTime()}
                        <div className='leading-[17px]'>
                            <span className='header-logged-text'>
                                Logged in at
                            </span>
                            <br />
                            <span className='header-loggged-time'>
                                08:50 AM
                            </span>
                        </div>
                    </div>

                    {/* active hours */}
                    <div className='header-logged-time-div'>
                        {SVGIcons.ActiveHourIcon()}
                        <div className='leading-[17px]'>
                            <span className='header-logged-text'>
                                Active Hours
                            </span>
                            <br />
                            <span className='header-loggged-time'>
                                03:50: 25
                            </span>
                        </div>
                    </div>

                    {/* random div */}
                    <div className='header-logged-time-div'>
                        {SVGIcons.LoggedTime()}
                        <div className='leading-[17px]'>
                            <span className='header-logged-text'>
                                Random div
                            </span>
                            <br />
                            <span className='header-loggged-time'>
                                03:50: 25
                            </span>
                        </div>
                    </div>

                </div>
            </div>
    
    )
}

export default Header
