'use client'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";       
import { BsTiktok } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <div className='contact' id='contact' >
      <motion.div 
             initial={{translateX:-300,opacity:0.5}}
             whileInView={{ opacity:1,translateX:0 }}
             transition={{ duration: 0.5, ease:'easeInOut' }}
        className='sectionName'>
            <h1 className='sectionName_h1'>Contactați-ne</h1>
        </motion.div>
      <div className='contact_social grid grid-cols-6'>
          <div className='col-span-2 md:col-span-1 contect_home'>
              <div className='contect_page'><IoHomeOutline ></IoHomeOutline></div>
              <h3>Bucureşti</h3>
          </div>
          <div className='col-span-2 md:col-span-1  contect_email'>
              <div className='contect_page'>
                  <a href='mailto:pelicanul.food@gmail.com '>
                  <MdEmail></MdEmail>
                  </a>

              </div>
              <h3>E-mail</h3>
          </div>
          <div className='col-span-2 md:col-span-1  contect_whats'>
              <div className='contect_page'><a href='http://wa.me/+40(731)183674'><MdWhatsapp></MdWhatsapp></a></div>
              <h3>whatsapp</h3>
          </div>
          <div className='col-span-2 md:col-span-1  contect_face'>
              <div className='contect_page'><a href=''><CiFacebook></CiFacebook></a></div>
              <h3>Facebook</h3>

          </div>
          <div className='col-span-2 md:col-span-1  contect_ins'>
          <div className='contect_page'><a href='https://instagram.com/pelicanul.food?igshid=M2RkZGJiMzhjOQ=='><IoLogoInstagram></IoLogoInstagram></a></div>
          <h3>Instagram</h3>

          </div>
          <div className='col-span-2 md:col-span-1  contect_tik'>
          <div className='contect_page'><a href='https://www.tiktok.com/@pelicanul.food?_t=8hWSlooczyr&_r=1'><BsTiktok></BsTiktok></a></div>
          <h3>Tik Tok</h3>
          
          </div>
      </div>
    </div>
  )
}

export default Contact
