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
        <p>
          When I&#x27;m not busy with my tech adventures, I have a few hobbies
          to keep me grounded. You&#x27;ll often find me biking with friends,
          keeping fit with Crossfit, or traveling with my camera, always ready
          to capture those special moments.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
