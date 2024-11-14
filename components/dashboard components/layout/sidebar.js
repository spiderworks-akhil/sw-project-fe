import React from 'react'
import Image from 'next/image'



function SideBar() {
    return (
        <div className='side-bar-conatiner'>
            <div className='side-bar-header'>
                <div className='flex'>
                    <div className='flex items-center '>
                        <Image className='side-bar-image -mr-7' src={'/img/HeaderLogo.svg'} height={100} width={100} />
                        ork
                    </div>
                    <div className='side-bar-work-label'>
                      <br />
                        Management Portal
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SideBar
