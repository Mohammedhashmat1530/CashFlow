import React from 'react'

const Content1 = () => {
  return (
    <section className='bg-gray-50'>
  <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://plus.unsplash.com/premium_photo-1682309580199-12b830e35008?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Simplify Cash Flow for Smarter Financial Decisions</h2>

        <p className="mt-4 text-gray-600">
        Efficiently manage your cash flow with our easy-to-use tools and gain the insights you need for smarter financial decisions.


        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Content1
