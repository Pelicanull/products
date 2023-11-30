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
    <motion.div
    initial={{translateX:-300,opacity:0.5}}
    whileInView={{ opacity:1,translateX:0 }}
    transition={{ duration: 0.8, ease:'easeInOut' }}
    
    className='footer overflow-hidden'>
       CopyRight © 2023 ,All Right Reseverd By <span className='text-red-700'>Mgs media</span> 
    </motion.div>
  )
}

export default Footer