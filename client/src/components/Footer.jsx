import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white">
  <div className="relative mx-auto max-w-screen-xl px-2 py-4 sm:px-6 lg:px-8 lg:pt-16">
 

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start ">
          <img src="/images/Preview.png" alt="" srcset=""  className=''/>
        </div>

        <p className="mx-auto  max-w-md text-center leading-relaxed text-gray-600 lg:text-left">
        Maximize your cash flow potential with our user-friendly financial management platform.
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
       

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Projects </a>
        </li>

        
      </ul>
    </div>

    <p className="mt-8 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2024. All rights reserved.
    </p>
  </div>
</footer>
  )
}

export default Footer
