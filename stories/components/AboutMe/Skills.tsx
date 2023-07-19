'use client'

import { motion } from 'framer-motion'

interface SkillsProps {
  skills: string[]
  calibration: number
}

const Skills = ({ skills, calibration = -1665 }: SkillsProps) => {
  const marqueeVariants = {
    animate: {
      x: [0, calibration],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40,
          ease: 'linear',
        },
      },
    },
  }

  return (
    <div className="rounded-full bg-night text-white w-full overflow-hidden">
      <motion.div
        className="flex list-none whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center text-center text-4xl font-bold leading-normal"
          >
            <span>{skill}</span>
            <span className="mx-2">/</span>
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            aria-hidden="true"
            className="flex items-center text-center text-4xl font-bold leading-normal"
          >
            <span>{skill}</span>
            <span className="mx-2">/</span>
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            aria-hidden="true"
            className="flex items-center text-center text-4xl font-bold leading-normal"
          >
            <span>{skill}</span>
            <span className="mx-2">/</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
