"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-transparent font-medium mt-[10px] text-center mb-[15px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'
        >
            My Skills
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            Here are some of my skills that I have learned during college.
        </motion.div>
    </div>
  )
}

export default SkillText