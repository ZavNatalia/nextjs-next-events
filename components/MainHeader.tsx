"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/public/images/logo.png'

export default function MainHeader() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenCloseMenu = () => {
        setIsOpenMenu(prevState => !prevState);
    }

    return (<nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Link href="/"
                              className="flex gap-2 items-center text-white text-lg font-medium"
                              aria-current="page">
                            <Image src={Logo} height={36} width={36} alt='Logo'/>
                            NEXT/EVENTS
                        </Link>

                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">

                            <Link href="/events"
                                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                                Browse All Events
                            </Link>

                            <Link href="/community"
                                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                                Community
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                    <button type="button"
                            className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            aria-controls="mobile-menu" aria-expanded="false"
                            onClick={handleOpenCloseMenu}
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>

                        {isOpenMenu ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path fillRule="evenodd"
                                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                      clipRule="evenodd"/>
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                   className="w-6 h-6">
                                <path fillRule="evenodd"
                                      d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                      clipRule="evenodd"/>
                            </svg>
                        }
                    </button>
                </div>
            </div>
        </div>


        {isOpenMenu && <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <Link href="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                      aria-current="page">Main page</Link>
                <Link href="/events"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    Events
                </Link>
                <Link href="/community"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    Community
                </Link>
            </div>
        </div>}
    </nav>)
}