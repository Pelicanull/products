
'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Image from 'next/image'
import f1 from '../Image/pelcanul/1.png'
import f2 from '../Image/pelcanul/2.png'
import f3 from '../Image/pelcanul/3.png'
import f4 from '../Image/pelcanul/4.png'
import f5 from '../Image/pelcanul/5.png'
import f6 from '../Image/pelcanul/6.png'
import f7 from '../Image/pelcanul/7.png'
import f8 from '../Image/pelcanul/8.png'
import f9 from '../Image/pelcanul/9.png'
import f10 from '../Image/pelcanul/10.png'
import f11 from '../Image/pelcanul/11.png'
import f12 from '../Image/pelcanul/12.png'
import f13 from '../Image/pelcanul/13.png'
import f14 from '../Image/pelcanul/14.png'
import f15 from '../Image/pelcanul/15.png'
import f16 from '../Image/pelcanul/16.png'
import f17 from '../Image/pelcanul/17.png'
import f18 from '../Image/pelcanul/18.png'
import f19 from '../Image/pelcanul/19.png'
import f20 from '../Image/pelcanul/20.png'
import f21 from '../Image/pelcanul/21.png'
import f22 from '../Image/pelcanul/22.png'
import f23 from '../Image/pelcanul/23.png'
import f24 from '../Image/pelcanul/24.png'
import f25 from '../Image/pelcanul/Sham Food_028.png'
import { motion } from 'framer-motion'
const page = () => {
  const p_roduct=[
      {id:1, name:"Pelicanul food",descrption:"SALATA DE TON IN SOS MEXICAN",weght:"160 GR",img:f1},
      {id:2, name:"Pelicanul food",descrption:"TON INTREG IN ULEI VEGETAL",weght:"160 GR",img:f2},
      {id:3, name:"Pelicanul food",descrption:"TON INTREG IN SOS TOMAT",weght:"160 GR",img:f3},
      {id:4, name:"Pelicanul food",descrption:"TON INTREG IN ULEI VEGETAL WITH CHILI",weght:"160 GR",img:f4},
      {id:5, name:"Pelicanul food",descrption:"TON INTREG IN SOS PROPRIU",weght:"160 GR",img:f5},
      {id:6, name:"Pelicanul food",descrption:"TON INTREG AFUMAT IN ULEI VEGETAL",weght:"160 GR",img:f6},
      {id:7, name:"Pelicanul food",descrption:"TON MARUNTIT IN ULEI VEGETAL",weght:"160 GR",img:f7},
      {id:8, name:"Pelicanul food",descrption:"TON INTREG IN ULEI VEGETAL",weght:"160 GR",img:f8},
      {id:9, name:"Pelicanul food",descrption:"TON INTREG IN SOS PROPRIU",weght:"160 GR",img:f9},
      {id:10,name:"Pelicanul food",descrption:"TON INTREG IN ULEI VEGETAL WITH CHILI",weght:"160 GR",img:f10},
      {id:11,name:"Pelicanul food",descrption:"TON INTREG IN ULEI VEGETAL WITH CHILI",weght:"160 GR",img:f11},
      {id:12,name:"Pelicanul food",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:f12},
      {id:13,name:"Pelicanul food",descrption:"TON INTREG AFUMAT IN ULEI VEGETAL",weght:"160 GR",img:f13},
      {id:14,name:"Pelicanul food",descrption:"TON INTREG IN SOS TOMAT",weght:"160 GR",img:f14},
      {id:15,name:"Pelicanul food",descrption:"SALATA DE TON IN SOS MEXICAN",weght:"160 GR",img:f15},
      {id:16,name:"Pelicanul food",descrption:"TON PACKAGE",weght:"160 GR",img:f16},
      {id:17,name:"Pelicanul food",descrption:"TON PACKAGE",weght:"160 GR",img:f17},
      {id:18,name:"Pelicanul food",descrption:"TON PACKAGE",weght:"160 GR",img:f18},
      {id:19,name:"Pelicanul food",descrption:"TON PACKAGE",weght:"160 GR",img:f19},
      {id:20,name:"Pelicanul food",descrption:"TON PACKAGE",weght:"160 GR",img:f20},
      {id:21,name:"Pelicanul food",descrption:"TON PACKAGE",weght:"160 GR",img:f21},
  ]
  
  let products=p_roduct.map((e)=>{
    return (
      <div key={e.id} className='product '>
                  <div className='bg-yellow-500 product_image'>
                    <Image 
                      src={e.img}
                      alt=''
                      className='w-full'
                    ></Image>
                  </div>
                  <div className='product_text'>
                    <h3 className='text-yellow-500'>{e.name}</h3>
                    <h1>{e.descrption}</h1>
                    <p className='text-yellow-500'> {e.weght}</p>
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