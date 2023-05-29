import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section style={{ background: 'linear-gradient(to right, #3c02ba, #180157, #0297fa)' }} className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#d9d502]' />
          <div className='w-1 sm:h-80 h-40 yellow-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#d9d502]'>Kartik</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces<br className='sm:block hidden' /> and web application
          </p>
        </div>

      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#ffffff] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-[#ffffff] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero