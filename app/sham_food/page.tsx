'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import f1 from "../Image/sham_food/1.png"
import f2 from "../Image/sham_food/2.png"
import f3 from "../Image/sham_food/3.png"
import f4 from "../Image/sham_food/4.png"
import f5 from "../Image/sham_food/5.png"
import f6 from "../Image/sham_food/6.png"
import f7 from "../Image/sham_food/7.png"
import f8 from "../Image/sham_food/8.png"
import f9 from "../Image/sham_food/9.png"
import f10 from "../Image/sham_food/10.png"
import f11 from "../Image/sham_food/11.png"
import f12 from "../Image/sham_food/12.png"
import f14 from "../Image/sham_food/14.png"
// import f15 from "../Image/sham_food/15.png"
import f16 from "../Image/sham_food/16.png"
import f17 from "../Image/sham_food/17.png"
import f18 from "../Image/sham_food/18.png"
import f19 from "../Image/sham_food/19.png"
import f20 from "../Image/sham_food/20.png"
import f21 from "../Image/sham_food/21.png"


const page = () => {
  const p_roduct=[
    {id:1, name:"Sham food",descrption:"SARDINES SOS TOMATO ",weght:"215 GR",img:f1},
    {id:2, name:"Sham food",descrption:"SARDINES  ULEI VEGETAL",weght:"215 GR",img:f2},
    {id:3, name:"Sham food",descrption:"TON MARUNTIT IN ULEI VEGETAL",weght:"160 GR",img:f3},
    {id:4, name:"Sham food",descrption:"TON INTREG IN ULEI VEGETAL",weght:"160 GR",img:f4},
    {id:5, name:"Sham food",descrption:"MACROU ULEI VEGETAL",weght:"200 GR",img:f5},
    {id:6, name:"Sham food",descrption:"SARDINES SOS TOMAT",weght:"200 GR",img:f6},
    {id:7, name:"Sham food",descrption:"MACROU SOS TOMAT",weght:"200 GR",img:f7},
    {id:8, name:"Sham food",descrption:"SARDINES  ULEI VEGETAL",weght:"200 GR",img:f8},
    {id:9, name:"Sham food",descrption:"ANANAS TAIAT",weght:"565 GR",img:f9},
    {id:10,name:"Sham food",descrption:"ANANAS RONDELE",weght:"565 GR",img:f10},
    {id:11,name:"Sham food",descrption:"MACROU SOS TOMAT",weght:"160 GR",img:f11},
    {id:12,name:"Sham food",descrption:"COCKTAIL FRUCTE",weght:"425 GR",img:f12},

    {id:15,name:"Sham food",descrption:"MACROU SOS TOMAT",weght:"425 GR",img:f14},
    {id:16,name:"Sham food",descrption:"MACROUIN ULEI VEGETAL",weght:"425 GR",img:f16},
    {id:18,name:"Sham food",descrption:"ANANAS TAIAT",weght:"3 KG",img:f18},
    {id:19,name:"Sham food",descrption:"COCKTAIL FRUCTE",weght:"3 KG",img:f19},
    {id:20,name:"Sham food",descrption:"ANANAS RONDELE",weght:"3 KG",img:f20},
    {id:21,name:"Sham food",descrption:"PORUMB DULCE ",weght:"420 KG",img:f21},

]
let products=p_roduct.map((e)=>{
  return (
    <div key={e.id} className='product '>
                <div className='bg-red-700 product_image'>
                  <Image 
                    src={e.img}
                    alt=''
                    className='w-full'
                  ></Image>
                </div>
                <div className='product_text'>
                  <h3 className='text-red-700'>{e.name}</h3>
                  <h1>{e.descrption}</h1>
                  <p className='text-red-700'> {e.weght}</p>
                </div>
              </div>
  )
})
  return (
    <div>
    <Navbar></Navbar>
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration: 0.1, ease:'easeInOut' }}
      className='product_pelical product_cart grid grid-cols-2  gap-y-4 gap-x-2 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 md:grid-cols-3 sm:grid-cols-2   mt-10 '>
              {products}
    </motion.div>
    <Footer></Footer>
    </div>
  )
}

export default page
