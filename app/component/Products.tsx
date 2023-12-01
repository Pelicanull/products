'use client'
import Link from 'next/link'
import React from 'react'
import SectionName from './sectionName'
import Image from 'next/image'
// import f1 from '../Image/secion-shape-1.png'
import f1 from '../Image/pelcanul/2.png'
import f2 from '../Image/pelcanul/3.png'
import f3 from '../Image/sham_food/1.png'
import f4 from '../Image/sham_food/2.png'
import { motion } from 'framer-motion'
const Products = () => {

  return (
    <div className='products' id='products'>
        <motion.div 
             initial={{translateX:-300,opacity:0.5}}
             whileInView={{ opacity:1,translateX:0 }}
             transition={{ duration: 1, ease:'easeInOut' }}
        className='sectionName'>
            <h1 className='sectionName_h1'>Produsele noastre</h1>
        </motion.div>
        <motion.div 
             initial={{opacity:0}}
             whileInView={{opacity:1 }}
             transition={{ duration: 0.7, ease:'easeInOut' }}
        className='prandType'>
            <Link href="/pelicaul" className='pelicaul p-3'>Pelicanul food</Link>
            <Link href="/sham_food" className='sham_food p-3'>Sham food</Link>
        </motion.div>
        <div className='product_cart grid grid-cols-2  gap-y-4 gap-x-2 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 md:grid-cols-3 sm:grid-cols-2   mt-10 '>
                <motion.div 
                  initial={{opacity:0}}
                  whileInView={{opacity:1 }}
                  transition={{ duration: 1, ease:'easeInOut' }}
                className='product '>
                  <div className='bg-yellow-500 product_image'>
                  <Image 
                    src={f1}
                    alt=''
                  ></Image>
                  </div>
                  <div className='product_text'>
                    <h3 className='text-yellow-500'>Pelicanul food</h3>
                    <h1>TON INTREG  ULEI VEGETAL</h1>
                    <p className='text-yellow-500'>160 GR</p>
                  </div>
                </motion.div>
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1 }}
                transition={{ duration: 1, ease:'easeInOut' }}
                className='product '>
                  <div className='bg-yellow-500  product_image'>
                    <Image 
                      src={f2}
                      alt=''
                    ></Image>
                  </div>
                  <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1 }}
                    transition={{ duration: 2, ease:'easeInOut' }}
                  className='product_text'>
                    <h3 className='text-yellow-500'>Pelicanul food</h3>
                    <h1>TON INTREG IN SOS TOMAT</h1>
                    <p className='text-yellow-500'>160 GR</p>
                  </motion.div>
                </motion.div>
                <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1 }}
                transition={{ duration:2.5, ease:'easeInOut' }}
                className='product '>
                  <div className='bg-red-700  product_image'>
                    <Image 
                      src={f3}
                      alt=''
                      className='w-full'
                    ></Image>
                  </div>
                  <div className='product_text'>
                    <h3 className='text-red-700'>Sham food</h3>
                    <h1>SARDINES SOS TOMATO</h1>
                    <p className='text-red-700'>215 GR</p>
                  </div>
                </motion.div>
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1 }}
                transition={{ duration: 3, ease:'easeInOut' }}
                className='product '>
                  <div className='bg-red-700  product_image'>
                    <Image 
                      src={f4}
                      alt=''
                      className='w-full'
                    ></Image>
                  </div>
                  <div className=' product_text'>
                    <h3 className='text-red-700'>Sham food</h3>
                    <h1>SARDINES  ULEI VEGETAL</h1>
                    <p className='text-red-700'>215 GR</p>
                  </div>
                </motion.div>
        </div>
    </div>
  )
}

export default Products