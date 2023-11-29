'use client'
import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'

const Home = () => {
  const text="Compania Pelcanul,"
  return (
    <AnimatePresence>
      <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        
      className='sectionHome '>
      <div 
      className='home'>
          <div className='textHome'>
              <h1 className='textHome_h1 ' ><span className='textHome_span'>{text}</span><br></br>Nu-l găsești nicăieri?<br>
              </br> Îl vei găsi aici!</h1>
          </div>
          <div className='searchText'>
                {/* <input type='search' placeholder='Search'></input>
                <button ><CiSearch></CiSearch></button> */}
          </div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Home