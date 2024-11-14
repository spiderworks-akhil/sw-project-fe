import React from 'react'
import Image from 'next/image'
import SVGIcons from '../utils/medias/svg'
import sideBarMenus from '../side-bar-menus'
import Link from 'next/link'
import { useRouter } from 'next/router'



function SideBar() {
    const router = useRouter()
    const handleNavigate = (menu) => {
        if (menu?.subMenu?.length > 0) {

        } else {
            router.push(`/dashboard${menu?.url}`)
        }

    }

    return (
        <div className='side-bar-conatiner px-[20px]'>
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

            <div className="sidebarmenu-block mt-[20px]">
                <ul className='sidebarmenu-block-item'>
                    {
                        sideBarMenus?.map((menu, index) => (
                            <li style={{ cursor: 'pointer' }} key={index} onClick={() => handleNavigate(menu)} className='flex flex-col items-center justify-between gap-[10px] py-[10px]'><a className='relative flex w-full justify-start items-center gap-[10px] text-[#5B5B5B] text-[14px] font-[500]'> {menu.icon} {menu?.title}
                                {
                                    menu?.subMenu?.length > 0 &&
                                    SVGIcons.DropDownIcon()
                                }
                            </a>
                                {
                                    menu?.subMenu?.length > 0 &&
                                    <ul className='sidebar-submenu-block w-full px-[10px]' >

                                        {
                                            menu?.subMenu?.map((child, childIndex) => (
                                                <Link key={childIndex} href={menu?.url + child?.url}>
                                                    <li className='border-b'><a className='text-[#5B5B5B] text-[14px] font-[500] py-[8px] w-full block'>{child?.title}</a></li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                }

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default SideBar
