import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiBootstrap, SiCsharp, SiDotnet, SiExpress, SiJavascript, SiMongodb, SiTailwindcss, SiTypescript, SiVisualbasic, SiVite } from "react-icons/si"
import { Separator } from './ui/separator'

export const SkillIconsList = () => {
  return (
    <div>
      <div>
          <p className='text-lg'>Front End Developer</p>
          <Separator className='my-1 py-[0.0625rem] rounded-lg bg-slate-900'/>
          <div className='grid grid-cols-6 gap-4 duration-200 text-2xl py-1'>
            <SiTypescript className='hover:text-blue-500'/>
            <SiJavascript className='hover:text-yellow-300'/>
            <SiTailwindcss className='hover:text-sky-600'/>
            <FaReact className='hover:text-sky-300'/> 
            <SiBootstrap className='hover:text-fuchsia-700'/>
            <SiVite className='hover:text-purple-500'/>
          </div>
          <SiDotnet className='hover:text-fuchsia-500'/>
          <SiCsharp className='hover:text-green-700'/>
          <SiVisualbasic className='hover:text-blue-600'/>
          <FaNodeJs className='hover:text-lime-500'/>
          <SiExpress className='hover:text-slate-500'/>
          <SiMongodb className='hover:text-green-800'/>
      </div>
    </div>
  )
}