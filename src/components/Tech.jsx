import React from 'react'
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => {
        return (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} index={index} />
          </div>
        )
      })}
    </div>
  )
}

export default SectionWrapper(Tech, "#tech");