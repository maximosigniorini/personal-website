"use client";

import { motion } from 'framer-motion'
import React, { useState } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';

export const runtime = "edge";

const photos = [
  {
    num: "01",
    category: "studio",
    title: "Working in the studio",
    image: '/assets/about/1.png'
  },
  {
    num: "02",
    category: "studio",
    title: "Working in the studio",
    image: '/assets/about/2.png'
  },
  {
    num: "03",
    category: "studio",
    title: "Working in the studio",
    image: '/assets/about/3.png'
  },
  {
    num: "04",
    category: "studio",
    title: "Working in the studio",
    image: '/assets/about/4.png'
  },
  {
    num: "05",
    category: "studio",
    title: "Working in the studio",
    image: '/assets/about/5.png'
  },
  {
    num: "06",
    category: "live",
    title: "Recording production sound on set",
    image: '/assets/about/6.png'
  },
  {
    num: "07",
    category: "live",
    title: "Recording production sound on set",
    image: '/assets/about/7.png'
  },
]

const About = () => {

  const [photo, setPhoto] = useState(photos[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setPhoto(photos[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-full">
          {/* Left Side - Paragraph about yourself */}
          <div className="w-full xl:w-[50%] h-full flex flex-col justify-center order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-full justify-center">
              <h2 className="text-[42px] font-bold leading-none text-white">
                About Me
              </h2>
              <p className="text-white/70 leading-relaxed">
                Sound designer, music composer
                with more than 5 years of experience. Passionate and
                creative in constant search for learning all aspects of sound.
                As a sound artist my goal is to create innovative and engaging audio pieces that enhance the viewers experience and the storytelling.
              </p>
              <p className="text-white/70 leading-relaxed">
                In 2024 I completed my Masters degree in Sound Design for Screen at Bournemouth University. Worked for <Link href="https://ronrocoaudio.com/" target='_blank' className='font-bold text-accent'>Ronroco Audio</Link>, a Buenos Aires based Sound Design and music studio that has worked for brands such as Toyota, Splice, Adidas and many more. Collaborated alongside Tom Joyce from <Link href="https://soundcanvas.co/" target='_blank' className='font-bold text-accent'>Sound Canvas</Link>.
              </p>
              {/* <p className="text-white/70 leading-relaxed">
                Since 2017 I have been developing my solo music project under the moniker Collatio.
              </p> */}
            </div>
          </div>

          {/* Right Side - Swiper Slider */}
          <div className="w-full xl:w-[50%] h-full">
            <Swiper spaceBetween={30} slidespreview={1} className="xl-h-[520px] h-full mb-12" autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} speed={1000} modules={[Autoplay, Pagination, Navigation]}>
              {photos.map((photo, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={photo.image} fill className="object-cover" alt={photo.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default About;