'use client'
import React from 'react'
import Image from 'next/image'
import f1 from '../Image/photo_٢٠٢٣-١٢-٠١_١٠-٤٨-٥٥.jpg'
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
      transition={{ duration: 1, ease:'easeInOut' }}
      className='sectionName'>
            <h1 className='sectionName_h1'>Despre noi</h1>
      </motion.div>
      <div 
      className='about  '>
        <motion.div
        initial={{translateX:-300,opacity:0.5}}
        whileInView={{ opacity:1,translateX:0 }}
        transition={{ duration: 1, ease:'easeInOut' }}
        className='about_img '>
            <Image src={f1} alt="" >

            </Image>
          </motion.div>
          <motion.div
          initial={{translateX:-300,opacity:0.5}}
          whileInView={{ opacity:1,translateX:0 }}
          transition={{ duration: 0.5, ease:'easeInOut' }}
          className='about_text text-center '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias, aperiam natus, doloremque maiores explicabo officia ipsam ut excepturi neque debitis. Modi, enim non mollitia iure fuga rerum dicta ut.
          </motion.div>
          
      </div>
    </motion.div>

  )
}

export default About
