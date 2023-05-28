import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5*index, 0.75)}
          className='w-full red-yellow-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-[#ff740a] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quidem dolores. Quas mollitia praesentium corporis perspiciatis vitae dolor, commodi pariatur veritatis temporibus voluptatibus possimus, placeat quod id hic quo ipsa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem a dolor quisquam, aut animi voluptatibus odio recusandae quos, ipsum temporibus soluta saepe. Excepturi necessitatibus suscipit in temporibus odit architecto harum.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
          return (
            <ServiceCard key={service.title} index={index} {...service} />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");