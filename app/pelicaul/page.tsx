
'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Image from 'next/image'
// import f1 from '../Image/pelcanul/Sham Food_003.png'
// import f2 from '../Image/pelcanul/Sham Food_004.png'
// import f3 from '../Image/pelcanul/Sham Food_005.png'
// import f4 from '../Image/pelcanul/Sham Food_006.png'
// import f5 from '../Image/pelcanul/Sham Food_007.png'
// import f6 from '../Image/pelcanul/Sham Food_008.png'
// import f7 from '../Image/pelcanul/Sham Food_011.png'
// import f8 from '../Image/pelcanul/Sham Food_028.png'
// import f9 from '../Image/pelcanul/Sham Food_029.png'
// import f10 from '../Image/pelcanul/Sham Food_035.png'
// import f11 from '../Image/pelcanul/Sham Food_036.png'
// import f12 from '../Image/pelcanul/Sham Food_037.png'
// import f13 from '../Image/pelcanul/Sham Food_038.png'
// import f14 from '../Image/pelcanul/Sham Food_039.png'
// import f15 from '../Image/pelcanul/Sham Food_040.png'
// import f16 from '../Image/pelcanul/Sham Food_041.png'
// import f17 from '../Image/pelcanul/Sham Food_042.png'
// import f18 from '../Image/pelcanul/Sham Food_043.png'
// import f19 from '../Image/pelcanul/Sham Food_044.png'
// import f20 from '../Image/pelcanul/Sham Food_045.png'
// import f21 from '../Image/pelcanul/Sham Food_046.png'
// import f22 from '../Image/pelcanul/Sham Food_047.png'
// import f23 from '../Image/pelcanul/Sham Food_048.png'
// import f24 from '../Image/pelcanul/Sham Food_049.png'
// import f25 from '../Image/pelcanul/Sham Food_050.png'
import { motion } from 'framer-motion'
const page = () => {
  const p_roduct=[
      {id:1, name:"PELICANUL",descrption:"Salata de ton",weght:"160 GR",img:""},
      {id:2, name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:3, name:"PELICANUL",descrption:"TON INTREG SOS TOMAT",weght:"160 GR",img:""},
      {id:4, name:"PELICANUL",descrption:"TON INTREG IN ULEI VEGETAL WITH CHILI",weght:"160 GR",img:""},
      {id:5, name:"PELICANUL",descrption:"TON INTREG IN SOS PROPRIU",weght:"160 GR",img:""},
      {id:6, name:"PELICANUL",descrption:"TON INTREG IN ULEI VEGETAL",weght:"160 GR",img:""},
      {id:7, name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:8, name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:9, name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:10,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:11,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:12,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:13,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:14,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:15,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:16,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:17,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:18,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:19,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:20,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
      {id:21,name:"PELICANUL",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
  ]
  
  let products=p_roduct.map((e)=>{
    return (
      <div className='product '>
                  <div className='product_image'>
                    <Image 
                      src={e.img}
                      alt=''
                      className='w-full'
                    ></Image>
                  </div>
                  <div className='product_text'>
                    <h1>{e.name}</h1>
                    <h3>{e.descrption}</h3>
                    <p>{e.weght}</p>
                  </div>
                </div>
    )
  })
  return (
   <>
    <Navbar></Navbar>
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration: 0.1, ease:'easeInOut' }}
      className='product_pelical product_cart grid grid-cols-2  gap-y-4 gap-x-2 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 md:grid-cols-3 sm:grid-cols-2   mt-10 '>
              {products}
    </motion.div>
    <Footer></Footer>
   </>
  )
}

export default page