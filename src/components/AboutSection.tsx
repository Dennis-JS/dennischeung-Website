import React from 'react';

const AboutSection = () => {
  return (
    <section
      id='about'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='About me'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          About
        </h2>
      </div>
      <div>
        <p className=' font-bold text-2xl mb-4'>Hey there! 👋</p>
        <p className='mb-4'>
          I&#x27;m a full stack software engineer with a passion for technology.
          I enjoy bridging the gap between engineering and design by combining
          my technical knowledge with my love for design to create a beautiful
          product. My goal is to build applications that are efficient,
          reliable, and scalable while providing engaging and memorable user
          experiences.
        </p>
        <p className='mb-4'>
          When I&#x27;m not busy with my tech adventures, I have a few hobbies
          to keep me grounded. You&#x27;ll often find me biking with friends,
          keeping fit with Crossfit, or traveling with my camera, always ready
          to capture those special moments.
        </p>
        <p className='mb-4'>I have experience in the following technologies:</p>
        <ul className=' flex flex-wrap'>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              JavaScript
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              TypeScript
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              React
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              Next.js
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              Node
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              Express
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              Redux
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              Python
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              AWS
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              Docker
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              Redis
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              PostgreSQL
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              MongoDB
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              GraphQL
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              TailwindCSS
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              HTML5
            </div>
          </li>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
              CSS
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
