import React from 'react';

const ExpSection = () => {
  return (
    <section
      id='experience'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='Work experience'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          Experience
        </h2>
      </div>
      <div>
        <ol className='group/list'>
          <li className='mb-12'>
            <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
              <header
                className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                aria-label='2022 to Present'
              >
                2022 — Present
              </header>
              <div className='z-10 sm:col-span-6'>
                <h3 className='font-medium leading-snug text-slate-200'>
                  <div>
                    <a
                      className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                      href='https://qeraunos.com'
                      target='_blank'
                      rel='noreferrer'
                      aria-label='Software Engineer at Qeraunos'
                    >
                      <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                      <span>
                        Software Engineer ·{' '}
                        <span className='inline-block'>
                          Qeraunos
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <ul className='list-disc mt-2 text-sm leading-normal'>
                  <li className='mt-2'>
                    <p>
                      Created a JavaScript library for GraphQL that reduces the
                      response times of queries and mutations while maintaining
                      data validity and credibility and preventing over-fetching
                      of data by introducing a custom LFU/LRU caching solution.
                    </p>
                  </li>
                  <li className='mt-2'>
                    <p>
                      Implemented a reusable component library in React to
                      modularize and encapsulate UI elements, reducing developer
                      time spent re-writing code and improving the user
                      experience.
                    </p>
                  </li>
                  <li className='mt-2'>
                    <p>
                      Engineered a Node.js server with its non-blocking,
                      asynchronous runtime environment to optimize web
                      performance through efficient management of peer-to-peer
                      traffic, while maintaining proper delivery of all
                      transferable data.
                    </p>
                  </li>
                  <li className='mt-2'>
                    <p>
                      Utilized Redis to integrate a server-side caching solution
                      by expanding the storage capacity without compromising the
                      validity or speed of data retrieval for a 50% reduction in
                      response times to end users.
                    </p>
                  </li>
                  <li className='mt-2'>
                    <p>
                      Built GraphQL schemas and a PostgreSQL database to mirror
                      a typical GraphQL use-case, ensuring consistency in the
                      Qeraunos library by providing a realistic testing
                      environment for a smoother product launch.
                    </p>
                  </li>
                  <li className='mt-2'>
                    <p>
                      Deployed a single page application using Docker and AWS
                      (Elastic Beanstalk, EC2, ECR) to achieve a containerized,
                      highly scalable, and reliable production environment, with
                      automated deployment and monitoring, resulting in an
                      uptime exceeding 99.99% and a load time of 0.3 seconds.
                    </p>
                  </li>
                  <li className='mt-2'>
                    <p>
                      Setup unit and end-to-end testing with Jest, SuperTest,
                      and React testing library to ensure the efficiency of our
                      caching solution and server-side requests to ensure code
                      maintainability and avoid unintended side effects during
                      the CI/CD pipeline.
                    </p>
                  </li>
                </ul>
                <ul
                  className='mt-2 flex flex-wrap'
                  aria-label='Technologies used'
                >
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      JavaScript
                    </div>
                  </li>
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
                      GraphQL
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      AWS
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
                      Docker
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className='mb-12'>
            <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
              <header
                className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                aria-label='2015 - 2022'
              >
                2015 - 2022
              </header>
              <div className='z-10 sm:col-span-6'>
                <h3 className='font-medium leading-snug text-slate-200'>
                  <div>
                    <a
                      className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                      href='https://brokercheck.finra.org/individual/summary/6391547'
                      target='_blank'
                      rel='noreferrer'
                      aria-label='FINRA Broker Check'
                    >
                      <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                      <span>
                        Senior Registered Client Service Associate ·{' '}
                        <span className='inline-block'>
                          UBS / Merrill Lynch / City National Bank
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <ul className='list-disc mt-2 text-sm leading-normal'>
                  <li>
                    <p className='mt-2'>
                      Created an interactive team webpage using a content
                      management system (CMS) by leveraging JavasScript, HTML,
                      and CSS to add responsive and accessible features for a
                      polished user experience.
                    </p>
                  </li>
                  <li>
                    <p className='mt-2'>
                      Mentored and onboarded junior team members in financial
                      modeling, investment strategies, and risk management by
                      conducting mock financial presentations and providing
                      feedback for improvement, leading to improved investment
                      performance and client satisfaction.
                    </p>
                  </li>
                </ul>

                <ul
                  className='mt-2 flex flex-wrap'
                  aria-label='Technologies used'
                >
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      JavaScript
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      CSS
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      HTML
                    </div>
                  </li>
                  <li className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                      WordPress
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ol>
        <div className='mt-12'>
          <a
            className='inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group'
            aria-label='View Full Résumé'
            href='/resume.pdf'
          >
            <span>
              <span className='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>
                View Full{' '}
              </span>
              <span className='whitespace-nowrap'>
                <span className='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>
                  Résumé
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
      </div>
    </section>
  );
};

export default ExpSection;
