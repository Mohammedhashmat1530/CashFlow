import React from 'react'

const Faq = () => {
  return (
    <div className="space-y-2 max-w-screen-2xl px-2 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-gray-100">
        <h4 className='text-center text-3xl font-medium mb-6'>Few Common FAQ</h4>
    <details
      className="group border-s-4 border-red-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        What makes Cashflow different from other budgeting apps?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      Cashflow offers a comprehensive suite of features designed to help you not only track expenses but also set and achieve savings goals, manage recurring expenses, and get insights through detailed reports. Our platform combines intuitive budgeting tools with predictive features to provide a holistic view of your financial health.
      </p>
    </details>
  

    <details
      className="group border-s-4 border-red-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        What features are available for expense tracking and reporting?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      Cashflow provides detailed expense logging with customizable categories, and offers both monthly and weekly expense reports. These features help you understand your spending habits and make informed financial decisions.
      </p>
    </details>

    <details
      className="group border-s-4 border-red-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        Is my financial data secure with Cashflow?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      Cashflow offers a comprehensive suite of features designed to help you not only track expenses but also set and achieve savings goals, manage recurring expenses, and get insights through detailed reports. Our platform combines intuitive budgeting tools with predictive features to provide a holistic view of your financial health.
      </p>
    </details>

    <details
      className="group border-s-4 border-red-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        How can Cashflow’s alerts help me stay on budget?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      Our alerts notify you when you are close to exceeding your budget, helping you make adjustments in real-time to stay within your financial limits.
      </p>
    </details>

    <div
    className="bg-indigo-500 px-2 py-2 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
    <p className="text-center font-medium sm:text-left">
 
      <br className="sm:hidden " />
      Looking to contribute to his project
    </p>
  
    <a
      className="mt-4 block rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
      href="https://github.com/Mohammedhashmat1530/CashFlow" target='_blank'
    >
      Contribute 
    </a>
  </div>
  </div>
  )
}

export default Faq
