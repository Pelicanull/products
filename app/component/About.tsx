'use client'
import React from 'react'
import Image from 'next/image'
import f1 from '../Image/about/1.jpg'
import { motion,AnimatePresence,useScroll } from 'framer-motion'
const About = () => {
  const { scrollYProgress } = useScroll();
  return (

    
     <motion.div 
     initial={{opacity:0,}}
       whileInView={{ opacity:1 }}
       transition={{ duration: 0.5, ease:'easeInOut' }}
       
     className='aboutUs' id='about'>
      <motion.div 
      initial={{translateX:-300,opacity:0.5}}
      whileInView={{ opacity:1,translateX:0 }}
      transition={{ duration: 0.5, ease:'easeInOut' }}
      className='sectionName'>
            <h1 className='sectionName_h1'>Despre noi</h1>
      </motion.div>
      <motion.div 
      initial={{translateX:-300,opacity:0.5}}
      whileInView={{ opacity:1,translateX:0 }}
      transition={{ duration: 0.5, ease:'easeInOut' }}
      className='about grid grid-cols-8 '>
          <div className='about_text  col-span-2'>
                bun venit in compania noastra
          </div>
          <div className='about_img col-span-6'>
            <Image src={f1} alt="" >

            </Image>
          </div>
      </motion.div>
    </motion.div>

  )
}

export default About
