import React from 'react'
import { userData } from '../controllers/userdata'

const HeaderInfo = () => {


    return (
        <header className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-6 sm:py-6 lg:px-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back,{userData().firstName}!</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Let's write a new goal! 🎉</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">


                        <button
                            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            Create Goal
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderInfo
