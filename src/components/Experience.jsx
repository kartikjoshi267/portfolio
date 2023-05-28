import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ backgroundColor: '#ff740a', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #fff' }}
      date={experience.date}
      iconStyle={{ background: index%2 == 0 ? '#fac402' : '#E6DEDD' }}
      icon={(
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
        </div>
      )}
    >
      <h3 className='text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-white text-[16px] font-bold' style={{ margin: '0' }}>
        {experience.company_name}
      </p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index)=>(
          <li 
            key={"experience-point-"+index}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>What have I done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index)=>(
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");