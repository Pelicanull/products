"use client"
import { FaAlignJustify } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import f1 from "../Image/logo/logo.png"
const Navbar = () => {
    const [navbar,setnavbar]=useState(false)
  return (
    <div>
        <nav className='nav  w-full rounded-br-md rounded-bl-md  fixed top-0 left-0 right-0 z-30 '>
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                        <Link href="/">
                            <Image src={f1} alt=""
                            width={100}
                            height={100}
                            ></Image>
                        </Link>
                        <div className='md:hidden'>
                            <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400'
                            onClick={(()=>{
                                return setnavbar(!navbar)
                            })}
                            >
                            {
                                navbar?(
                                    <h1><FaCircleXmark></FaCircleXmark></h1>
                                ):(
                                   <h1><FaAlignJustify></FaAlignJustify></h1>
                                )
                            }
                            </button>
                            
                        </div>
                    </div>
            </div>
            <div>
                <div className={`menu flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar? `p-12 md:p-0 block`:`hidden`}`}>
                        <ul className="h-screen md:h-auto items-center justify-center md:flex">
                            <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-red-900 hover:border-separate- border-red-900  md:hover:text-red-600   md:hover:bg-transparent">
                                <Link href="/" onClick={(()=>{
                                    return setnavbar(!navbar)
                                })}>
                                    Home
                                </Link>

                            </li>
                            <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-red-900 hover:border-separate- border-red-900  md:hover:text-red-600   md:hover:bg-transparent">
                                <Link href=".#about" onClick={(()=>{
                                    return setnavbar(!navbar)
                                })}>
                                    About
                                </Link>

                            </li>

                            <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0   hover:bg-red-900 hover:border-separate- border-red-900  md:hover:text-red-600    md:hover:bg-transparent">
                                <Link href=".#products" onClick={(()=>{
                                    return setnavbar(!navbar)
                                })}>
                                    Product
                                </Link>

                            </li>
                            <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-red-900 hover:border-separate- border-red-900  md:hover:text-red-600  md:hover:bg-transparent">
                                <Link href=".#contact" onClick={(()=>{
                                    return setnavbar(!navbar)
                                })}>
                                    Contact
                                </Link>

                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
