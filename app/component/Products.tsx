'use client'
import Link from 'next/link'
import React from 'react'
import SectionName from './sectionName'
import Image from 'next/image'
import f1 from '../Image/secion-shape-1.png'
import f2 from '../Image/pelcanul/Sham Food_003.png'
import f3 from '../Image/pelcanul/Sham Food_004.png'
import f4 from '../Image/sham_food/Sham Food_009.png'
import f5 from '../Image/sham_food/Sham Food_002.png'
import { motion } from 'framer-motion'
const Products = () => {

  return (
    <div className='products' id='products'>
        <motion.div 
             initial={{translateX:-1000}}
             whileInView={{ translateX:0 }}
             transition={{ duration: 0.5, ease:'easeInOut' }}
        className='sectionName'>
            <h1 className='sectionName_h1'>Produsul nostru</h1>
        </motion.div>
        <motion.div 
             initial={{opacity:0}}
             whileInView={{opacity:1 }}
             transition={{ duration: 0.7, ease:'easeInOut' }}
        className='prandType'>
            <Link href="/pelicaul" className='pelicaul p-3'>PELICANUL</Link>
            <Link href="/sham_food" className='sham_food p-3'>Mâncare simulată</Link>
        </motion.div>
        <div className='product_cart grid grid-cols-2  gap-y-4 gap-x-2 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 md:grid-cols-3 sm:grid-cols-2   mt-10 '>
                <motion.div 
                  initial={{opacity:0}}
                  whileInView={{opacity:1 }}
                  transition={{ duration: 1, ease:'easeInOut' }}
                className='product '>
                  <div className='product_image'>
                  <Image 
                    src={f2}
                    alt=''
                   
                  ></Image>
                  </div>
                  <div className='product_text'>
                    <h1>PELICANUL</h1>
                    <h3>TON INTREG ULEI VEGETAL</h3>
                    <p>160 GR</p>
                  </div>
                </motion.div>
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1 }}
                transition={{ duration: 1, ease:'easeInOut' }}
                className='product '>
                  <div className='product_image'>
                    <Image 
                      src={f3}
                      alt=''
                    ></Image>
                  </div>
                  <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1 }}
                    transition={{ duration: 2, ease:'easeInOut' }}
                  className='product_text'>
                    <h1>PELICANUL</h1>
                    <h3>TON INTREG ULEI VEGETAL</h3>
                    <p>160 GR</p>
                  </motion.div>
                </motion.div>
                <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1 }}
                transition={{ duration:2.5, ease:'easeInOut' }}
                className='product '>
                  <div className='product_image'>
                    <Image 
                      src={f4}
                      alt=''
                      className='w-full'
                    ></Image>
                  </div>
                  <div className='product_text'>
                    <h1>Mâncare simulată</h1>
                    <h3>TON INTREG ULEI VEGETAL</h3>
                    <p>160 GR</p>
                  </div>
                </motion.div>
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1 }}
                transition={{ duration: 3, ease:'easeInOut' }}
                className='product '>
                  <div className='product_image'>
                    <Image 
                      src={f5}
                      alt=''
                      className='w-full'
                    ></Image>
                  </div>
                  <div className='product_text'>
                    <h1>Mâncare simulată</h1>
                    <h3>TON INTREG ULEI VEGETAL</h3>
                    <p>160 GR</p>
                  </div>
                </motion.div>
        </div>
    </div>
  )
}

export default Products