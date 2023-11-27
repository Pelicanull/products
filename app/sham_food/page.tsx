'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
// import f1 from "../Image/sham_food/Sham Food_001.png"
// import f2 from "../Image/sham_food/Sham Food_002.png"
// import f3 from "../Image/sham_food/Sham Food_009.png"
// import f4 from "../Image/sham_food/Sham Food_010.png"
// import f5 from "../Image/sham_food/Sham Food_012.png"
// import f6 from "../Image/sham_food/Sham Food_013.png"
// import f7 from "../Image/sham_food/Sham Food_014.png"
// import f8 from "../Image/sham_food/Sham Food_015.png"
// import f9 from "../Image/sham_food/Sham Food_016.png"
// import f10 from "../Image/sham_food/Sham Food_017.png"
// import f11 from "../Image/sham_food/Sham Food_018.png"
// import f12 from "../Image/sham_food/Sham Food_019.png"
// import f13 from "../Image/sham_food/Sham Food_020.png"
// import f14 from "../Image/sham_food/Sham Food_021.png"
// import f15 from "../Image/sham_food/Sham Food_022.png"
// import f16 from "../Image/sham_food/Sham Food_023.png"
// import f17 from "../Image/sham_food/Sham Food_024.png"
// import f18 from "../Image/sham_food/Sham Food_025.png"
// import f19 from "../Image/sham_food/Sham Food_026.png"
// import f20 from "../Image/sham_food/Sham Food_027.png"

const page = () => {
  const p_roduct=[
    {id:1, name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:2, name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:3, name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:4, name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:5, name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:6, name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:7, name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:8, name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:9, name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:10,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:11,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:12,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:13,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:14,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:15,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:16,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:17,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:18,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:19,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
    {id:20,name:"Mâncare simulată",descrption:"TON INTREG ULEI VEGETAL",weght:"160 GR",img:""},
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
