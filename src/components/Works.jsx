import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, project }) => {
  const { name, description, tags, image, source_code_link } = project;
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      onClick={() => window.open(source_code_link, "_blank")}
      className='cursor-pointer'
    >
      <Tilt className="bg-[#ff740a] p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col justify-between">
        <div>
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='text-white mt-2 project-desc'>{description}</p>
          </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <span key={tag} className='bg-[#f009] rounded-[10px] p-2'>#{tag}</span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>

      </div>
      <div className='mt-20 flex flex-wrap gap-7 items-stretch'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")