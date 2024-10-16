"use client";

import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Sound Design',
    description: 'Works for advertisements, motion graphics and film.',
    href: "/work/sound-design"
  },
  {
    num: '02',
    title: 'Music Composition',
    description: 'Works for advertisements, motion graphics, film and solo projects.',
    href: "/work/music"
  },
  {
    num: '03',
    title: 'Mix',
    description: 'Works for music projects and artists.',
    href: "/work/mix"
  },
];

const Work = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        {/* Grid with custom layout */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: 'easeIn' } }} 
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {/* Loop through services to create clickable categories */}
          {services.map((service, index) => (
            <Link href={service.href} key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                  {service.num}
                </div>
                <div className='w-[70px] h-[70px] rounded-full bg-white/40 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowRight className='text-primary text-3xl'/>
                </div>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                {service.title}
              </h2>
              <p className='text-white/60'>{service.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
