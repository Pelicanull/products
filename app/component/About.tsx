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
            <h1 className='sectionName_h1'>..........</h1>
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
              untem o companie dedicată producerii și comercializării de conserve de pește,ton,sardine si macarel de calitate premium. Încă din anul 1991 îmbinăm tradiția pescuitului sustenabil cu tehnologii moderne pentru a vă oferi produse de cea mai înaltă calitate. De la selecția atentă a alimentelor proaspete,pescuite responsabil, la procesul meticulos de conservare, ne angajăm să vă aducem gust autentic și nutriție deosebită în fiecare conservă, conservele noastre sunt disponibile in diferite mărimi si gramaje.
              Colaboram cu cei mai importanți distribuitori,cu piața angro şi nu în ultimul rând cu grupul HORECA
              Descoperiți pasiunea noastră pentru calitate în fiecare macro crocant și fiecare felie de ton suculent.
          </motion.div>
          
      </div>
    </motion.div>

  )
}

export default About
