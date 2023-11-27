'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import f0 from '../Image/logo/logo.png'
import f1 from "../Image/footer/photo_٢٠٢٣-١١-٢٥_١٦-٠٥-١٦.jpg"
import f2 from "../Image/footer/photo_٢٠٢٣-١١-٢٥_١٦-٠٥-٣٠.jpg"
import f3 from "../Image/footer/photo_٢٠٢٣-١١-٢٥_١٦-٠٥-٥١.jpg"
import f4 from "../Image/footer/photo_٢٠٢٣-١١-٢٥_١٦-٠٥-٥٢.jpg"
import f5 from "../Image/footer/photo_٢٠٢٣-١١-٢٥_١٦-٠٦-١٩.jpg"
import f6 from "../Image/footer/photo_٢٠٢٣-١١-٢٥_١٦-٠٦-٤٠.jpg"
import { MdEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";       
import { BsTiktok } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div
    className='footer overflow-hidden'>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{ duration: 0.3, ease:'easeInOut' }}
            className='footer_container  grid grid-cols-12 '>
            <div className=' footer_1 col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-12  z-10'>
                    <Link href="/" className='footer_logo'>
                        <Image src={f0}
                        width={120}
                        height={120}
                        alt=''>
                        </Image>
                        <h1 >Pelcanul</h1>
                    </Link>
                    <p className='footer_text'>
                    picioarele noastre sunt pe pământ, dar ambițiile noastre sunt de deasupra norilor și iată cum ne mișcăm pentru a ne satisface clienții
                    </p>
                    <div className='footer_social'>
                            <div className='footer_email'>
                                <a href='mailto:pelicanul.food@gmail.com ' className='grid grid-cols-2 gap-0'>
                                        <MdEmail ></MdEmail>
                                        <p className='-mt-1'>Pelcanul.food@gmail.com</p>
                                </a>
                            </div>
                            <div className='footer_whatsup'>
                                <a href='http://wa.me/+40(731)183674' className='grid grid-cols-2 gap-0'>
                                        
                                        <MdWhatsapp></MdWhatsapp>
                                        <p className='-mt-1'>+40(731)183674</p>
                                        
                                </a>
                            </div>
                            <div className='footer_contect'>
                                <a href='https://instagram.com/pelicanul.food?igshid=M2RkZGJiMzhjOQ=='><IoLogoInstagram></IoLogoInstagram></a>
                                <a href=''><CiFacebook></CiFacebook></a>
                                <a href='https://www.tiktok.com/@pelicanul.food?_t=8hWSlooczyr&_r=1'><BsTiktok></BsTiktok></a>
                            </div>
                            <div></div>
                    </div>


            </div>
            <div className='footer_2 col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-12 z-10'>
                <div className='link_footer '>
                        <h1 className='link_footer_h1'>Legături rapide</h1>
                        <ul className='link_footer_ul'>
                              <li><Link href=''>Home</Link>  </li>
                              <li><Link href=''>About Us</Link>  </li>
                              <li><Link href=''>Our Products</Link>  </li>
                              <li><Link href=''>contect</Link> </li> 
                        </ul>
                </div>
            </div>
            <div className='footer_3 col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-12 z-10'>
                <div className='opening_footer'>
                        <h1 className='opening_footer_h1'>Ore de deschidere</h1>
                        <ul className='opening_footer_ul'>
                              <li> <p>Monday</p> <span>10:00 - 20:00</span></li>
                              <li> <p>Tuesday</p> <span>10:00 - 20:00</span></li>
                              <li> <p>Wednesday</p> <span>10:00 - 20:00</span></li>
                              <li> <p>Friday</p> <span>10:00 - 20:00</span></li> 
                              <li> <p>Saturday</p> <span>10:00 - 20:00</span></li> 
                              <li> <p>Sunday</p> <span>10:00 - 20:00</span></li> 
                        </ul>
                </div>
            </div>
            <div className='footer_3 col-span-12 lg:col-span-2 md:col-span-6 sm:col-span-12 z-10'>
                <div className='instgram_footer'>
                        <h1 className='instgram_footer_h1'>Fotografie</h1>
                        <div className='instgram_footer-img grid grid-cols-3'>
                            <Image src={f1} alt="" width={100} height={1000} className='m-2'></Image>
                            <Image src={f2} alt="" width={100} height={100} className='m-2'></Image>
                            <Image src={f3} alt="" width={100} height={100} className='m-2'></Image>
                            <Image src={f4} alt="" width={100} height={100} className='m-2'></Image>
                            <Image src={f5} alt="" width={100} height={100} className='m-2'></Image>
                            <Image src={f6} alt="" width={100} height={100} className='m-2'></Image>
                            
                        </div>
                </div>
            </div>
            </motion.div>
    </div>
  )
}

export default Footer