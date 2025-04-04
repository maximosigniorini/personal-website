"use client";

export const runtime = "edge";

const details = {
  title: 'Details',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Maximo Signiorini"
    },
    {
      fieldName: "Phone",
      fieldValue: "+447354981942"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ years"
    },
    {
      fieldName: "Email",
      fieldValue: "maximosigniorini97@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Argentina & Spain"
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English (C2)"
    },
  ]
}

const experience = {
  icon: '/assets/Resume/badge.svg',
  title: 'My Experience',
  description: "Since 2016 I became deeply involved working as a music composer for films and as the years went by got more and more involved in sound design for all screen-based media.",
  items: [
    {
      company: "Ronroco Audio",
      position: "Sound Designer & Music Producer",
      duration: "2021 - present",
      link: "https://ronrocoaudio.com/"
    },
    {
      company: "Freelance",
      position: "Sound Designer & Music Producer",
      duration: "2017 - present",
      link: "https://www.linkedin.com/in/maximo-signiorini/"
    }
  ]
}

const education = {
  icon: '/assets/Resume/cap.svg',
  title: 'My education',
  items: [
    {
      institution: "Bournemouth University",
      degree: "MA Sound Design for Screen",
      duration: "2023 - 2024",
      link: "https://www.bournemouth.ac.uk/study/courses/ma-sound-design-screen"
    },
    {
      institution: "Universidad Nacional de Tres de Febrero",
      degree: "Bachelor in Electronic Arts",
      duration: "2016 - 2022",
      link: "http://untref.edu.ar/carrera/artes-electronicas"
    },
    {
      institution: "Morley College",
      degree: "Music Production Summer Course",
      duration: "2015",
      link: "https://www.morleycollege.ac.uk/courses/course/recording-and-music-production-1-2/"
    },
  ]
}

const skills = {
  title: "My skills",
  description: "Some of the DAW's I work with alongside a wide variety of VST plugins and outboard gear.",
  skillist: [
    {
      icon: '/assets/resume/protools3.png',
      name: "Avid Pro Tools"
    },
    {
      icon: '/assets/resume/logic.png',
      name: "Logic Pro X"
    },
    {
      icon: '/assets/resume/reaper.png',
      name: "Reaper"
    },
    {
      icon: '/assets/resume/ableton.png',
      name: "Ableton Live"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: 'easeIn' } }} className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>

      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <Link key={index} href={item.link} target='_blank'>
                              <p className='text-white/60 hover:text-accent hover:underline'>{item.company}</p>
                            </Link>
                            
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <Link key={index} href={item.link} target="_blank">
                              <p className='text-white/60 hover:text-accent hover:underline'>{item.institution}</p>
                            </Link>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <Image src={skill.icon} width={60} height={60} alt='Skills'/>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Details */}
            <TabsContent value="details" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{details.title}</h3>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {details.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </ motion.div>
  )
}

export default Resume