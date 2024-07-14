import React from 'react'

const InfoCards = () => {
    return (
        <section className=' bg-gray-50 '>
            <div className='w-full flex justify-between flex-wrap'>
                <div className='flex shadow-lg m-3 gap-3 ml-24 sm-ml-3 mb-0 mt-0 rounded-lg border-2 hover:border-2 hover:border-customColor-Red'>
                    <div className='p-4 m-1'>
                        <h2 className='text-3xl font-semibold'>₹9874 </h2>
                        <h2 className='text-2xl font-normal text-gray-500 mb-3'>Earning </h2>
                        <div className='flex flex-row gap-4'>
                            <div className='flex flex-row gap-2 justify-center p-2 rounded-lg bg-green-500'>
                                <div className='text-center mt-1'>
                                    <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="text-black">
                                        <path d="M20,8v2h6.5859L18,18.5859,13.707,14.293a.9994.9994,0,0,0-1.414,0L2,24.5859,3.4141,26,13,16.4141l4.293,4.2929a.9994.9994,0,0,0,1.414,0L28,11.4141V18h2V8Z" />
                                        <rect width="32" height="32" class="fill-transparent" />
                                    </svg>

                                </div>
                                <div>
                                    <h4 className='text-xl font-normal text-white '>+2.5</h4>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-lg font-normal text-gray-400 p-2'>Since 30 days</h4>
                            </div>
                        </div>
                    </div>
                    <div className='bg-customColor-Red h-full flex pl-1 rounded-r-md pr-1'>
                            <button type='submit' className='text-white '>Add</button>
                    </div>
                </div>

                <div className='flex shadow-lg m-3 gap-3 mb-0 mt-0 rounded-lg hover:border-2 hover:border-customColor-Red  border-2'>
                    <div className='p-4 m-1'>
                        <h2 className='text-3xl font-semibold'>₹69 </h2>
                        <h2 className='text-2xl font-normal text-gray-500 mb-3'>Expenses </h2>
                        <div className='flex flex-row gap-4'>
                            <div className='flex flex-row gap-2 justify-center p-2 rounded-lg bg-green-500'>
                                <div className='text-center mt-1'>
                                    <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="text-black">
                                        <path d="M20,8v2h6.5859L18,18.5859,13.707,14.293a.9994.9994,0,0,0-1.414,0L2,24.5859,3.4141,26,13,16.4141l4.293,4.2929a.9994.9994,0,0,0,1.414,0L28,11.4141V18h2V8Z" />
                                        <rect width="32" height="32" class="fill-transparent" />
                                    </svg>

                                </div>
                                <div>
                                    <h4 className='text-xl font-normal text-white '>+2.5</h4>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-lg font-normal text-gray-400 p-2'>Since 30 days</h4>
                            </div>
                        </div>
                    </div>
                    <div className='bg-customColor-Red h-full flex pl-1 rounded-r-md pr-1'>
                            <button type='submit' className='text-white '>Add</button>
                    </div>
                </div>
                <div className='flex shadow-lg m-3 gap-3 mr-24 mb-0 mt-0 rounded-lg border-2 hover:border-2 hover:border-customColor-Red'>
                    <div className='p-4 m-1'>
                        <h2 className='text-3xl font-semibold'>0 </h2>
                        <h2 className='text-2xl font-normal text-gray-500 mb-3'>Goals </h2>
                        <div className='flex flex-row gap-4'>
                            <div className='flex flex-row gap-2 justify-center p-2 rounded-lg bg-green-500'>
                                <div className='text-center mt-1'>
                                    <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="text-black">
                                        <path d="M20,8v2h6.5859L18,18.5859,13.707,14.293a.9994.9994,0,0,0-1.414,0L2,24.5859,3.4141,26,13,16.4141l4.293,4.2929a.9994.9994,0,0,0,1.414,0L28,11.4141V18h2V8Z" />
                                        <rect width="32" height="32" class="fill-transparent" />
                                    </svg>

                                </div>
                                <div>
                                    <h4 className='text-xl font-normal text-white '>2 done</h4>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-lg font-normal text-gray-400 p-2'>Since 30 days</h4>
                            </div>
                        </div>
                    </div>
                    <div className='bg-customColor-Red h-full flex pl-1 rounded-r-md pr-1'>
                            <button type='submit' className='text-white '>Add</button>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}

export default InfoCards
