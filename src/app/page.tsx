import Image from 'next/image';
import coderImg from './assets/Armaan.jpg';
import NavMenu from './components/NavMenu';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  return (
    <div id='Home' className='bg-black text-white'>
      <NavMenu  />
      <div className='relative flex flex-col md:flex-row p-5 md:p-10 justify-evenly items-center mt-10'>
        <div className='mb-8 md:mb-0 md:mr-8 md:w-1/3'>
          <div className='text-5xl py-3'>
            Hey, I&apos;m<br/> Armaan Zeyad
          </div>
          <div className='text-gray-300 leading-relaxed'>
            I&apos;m a passionate Full Stack Web & App Developer who is proficient in building robust, fully functional software.     
            I enjoy working with both frontend and backend technologies. I&apos;m constantly learning and evolving with new technologies.
	    Other than this I like to play a bit of chess sometimes
          </div>
        </div>
        <div className='w-full md:w-auto'> 
          <Image
            className='w-full h-auto md:max-w-md' 
            src={coderImg}
            alt='A programmer coding'
          />
        </div>
      </div>
      <TechStack />
      <Projects  />
      <Contact/>
    </div>
  );
}
