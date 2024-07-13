import React from 'react'

const Announcement = () => {
  return (
    <div
    className="bg-indigo-500 px-2 py-2 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
    <p className="text-center font-medium sm:text-left">
 
      <br className="sm:hidden " />
      Website under developement, formulating new features
    </p>
  
    <a
      className="mt-4 block rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
      href="https://github.com/Mohammedhashmat1530/CashFlow" target='_blank'
    >
      Contribute 
    </a>
  </div>
  )
}

export default Announcement
