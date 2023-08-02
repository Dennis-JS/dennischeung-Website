import React from 'react';
import Image from 'next/image';

const ProjectsSection = () => {
  return (
    <section
      id='projects'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='Selected projects'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          Projects
        </h2>
      </div>
      <div>
        <ul className='group/list'>
          <li className='mb-12'>
            <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
              <div className='z-10 sm:order-2 sm:col-span-6'>
                <h3>
                  <a
                    className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                    href='https://github.com/Dennis-JS/R2D2-Lite'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='R2D2 Lite'
                  >
                    <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                    <span>
                      Auto-Emailer
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h3>
                <p className='mt-2 text-sm leading-normal'>
                  A chatbot powered by OpenAPI built with React, FastAPI,
                  LangChain to auto-generate personalized email sequences.
                </p>
                <ul
                  className='mt-2 flex flex-wrap'
                  aria-label='Technologies used'
                >
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      OpenAI API
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      React
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      FastAPI
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      LangChain
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      JavaScript
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      Python
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                className='sm:order-1 sm:col-span-2 sm:translate-y-1'
                src='/robot.png'
                width={150}
                height={20}
                alt='picture of robot'
              />
            </div>
          </li>
          <li className='mb-12'>
            <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
              <div className='z-10 sm:order-2 sm:col-span-6'>
                <h3>
                  <a
                    className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                    href='https://github.com/Dennis-JS/portfolio-website'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Portfolio Website'
                  >
                    <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                    <span>
                      Portfolio Website
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h3>
                <p className='mt-2 text-sm leading-normal'>
                  My personal portfolio website build with Next.JS and Tailwind
                  CSS
                </p>
                <ul
                  className='mt-2 flex flex-wrap'
                  aria-label='Technologies used'
                >
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      Next.js
                    </div>
                  </li>
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
                      Tailwind CSS
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                className='sm:order-1 sm:col-span-2 sm:translate-y-1'
                src='/hi.png'
                width={150}
                height={48}
                alt='picture of portfolio'
              />
            </div>
          </li>
          <li className='mb-12'>
            <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
              <div className='z-10 sm:order-2 sm:col-span-6'>
                <h3>
                  <a
                    className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                    href='https://github.com/MyBookcase/Scratch_Project'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='MyBookcase'
                  >
                    <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                    <span>
                      MyBookcase
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h3>
                <p className='mt-2 text-sm leading-normal'>
                  A visualizer to store collection of books owned and read by
                  individual users.
                </p>
                <ul
                  className='mt-2 flex flex-wrap'
                  aria-label='Technologies used'
                >
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      React
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
                      PostgreSQL
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      JavaScript
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                className='sm:order-1 sm:col-span-2 sm:translate-y-1'
                src='/book.png'
                width={150}
                height={20}
                alt='picture of book'
              />
            </div>
          </li>
          <li className='mb-12'>
            <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
              <div className='z-10 sm:order-2 sm:col-span-6'>
                <h3>
                  <a
                    className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                    href='https://github.com/Dennis-JS/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Jobbr'
                  >
                    <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                    <span>
                      Jobbr
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h3>
                <p className='mt-2 text-sm leading-normal'>
                  An app to keep track of jobs that users have applied to as
                  well as their progression for each application.
                </p>
                <ul
                  className='mt-2 flex flex-wrap'
                  aria-label='Technologies used'
                >
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      React
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
                      MongoDB
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      TypeScript
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                className='sm:order-1 sm:col-span-2 sm:translate-y-1'
                src='/briefcase.png'
                width={150}
                height={48}
                alt='picture of briefcase'
              />
            </div>
          </li>
        </ul>
      </div>
      <div className='mt-12'>
        <a
          className='inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group'
          aria-label='View GitHub Profile'
          href='https://github.com/Dennis-JS'
        >
          <span>
            <span className='whitespace-nowrap'>
              <span className='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>
                View Full GitHub Profile
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
