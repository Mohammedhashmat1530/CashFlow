import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, useClerk } from "@clerk/clerk-react";

const SideNav = () => {

    const { signOut } = useClerk();
    console.log("ghere", signOut)

    async function handleSignOut() {
        await signOut()
    }

    return (
        <div className="flex h-screen w-16 flex-col justify-between border-e gap-16 bg-white">
            <div>
                <div className="inline-flex size-16 items-center justify-center">
                    <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                        <UserButton />
                    </span>
                </div>

                <div className="border-t border-gray-100">
                    <div className="px-2">
                        <div className="py-4">
                            <a
                                href="#"
                                className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5 opacity-75"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    />
                                </svg>

                                <span
                                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                >
                                    Dashboard
                                </span>
                            </a>
                        </div>

                        <ul className="space-y-1 border-t border-gray-100 pt-4">
                            <li>
                                <a
                                    href="#"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2" >
                                        <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="0.5 3.5" />
                                        <path d="M22 12C22 6.47715 17.5228 2 12 2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M12 9V13H16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        History
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>

                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Account
                                    </span>
                                </a>
                            </li>


                            <li>
                                <a
                                    href="#"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 opacity-75"
                                        fill="#4e4a4a"
                                        viewBox="0 0 1024 1024"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z" />
                                    </svg>

                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Calender
                                    </span>
                                </a>
                            </li>


                            <li>
                                <a
                                    href="#"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-7 opacity-75"  // Example Tailwind classes
                                        viewBox="0 0 60 60"
                                        fill="none"
                                    >
                                        <g data-name="Layer 2" id="Layer_2">
                                            <g id="Icons">
                                                <g id="Folder">
                                                    <rect className="fill-none" height="60" width="60" />
                                                    <path
                                                        className="fill-[#3d3d63]"
                                                        d="M46.27,32.49h-.05l1.92-21.88A2.34,2.34,0,0,0,46,8.08L18.55,5.68A2.35,2.35,0,0,0,16,7.8l-.25,2.91H13.55A2.33,2.33,0,0,0,11.22,13V50.43a2.33,2.33,0,0,0,2.33,2.33h4a2.53,2.53,0,0,0,2.33,1.57H46.27a2.52,2.52,0,0,0,2.51-2.51V35A2.52,2.52,0,0,0,46.27,32.49ZM18,8a.33.33,0,0,1,.36-.3l27.46,2.4a.33.33,0,0,1,.3.36L44.21,32.49h-.76V13a2.33,2.33,0,0,0-2.33-2.33H17.78Zm-.68,31.57V50.76H13.55a.33.33,0,0,1-.33-.33V13a.33.33,0,0,1,.33-.33H41.12a.33.33,0,0,1,.33.33V32.49H36.74a4,4,0,0,0-2.5.88l-4.05,3.22a2,2,0,0,1-1.26.44H19.85A2.51,2.51,0,0,0,17.34,39.54ZM46.78,51.82a.51.51,0,0,1-.51.51H19.85a.51.51,0,0,1-.51-.51V39.54a.51.51,0,0,1,.51-.51h9.08a4,4,0,0,0,2.51-.88l4-3.22a2.07,2.07,0,0,1,1.26-.44h9.53a.51.51,0,0,1,.51.51Z"
                                                    />
                                                    <path
                                                        className="fill-[#3d3d63]"
                                                        d="M43.64,48.27H39.87a1,1,0,0,0,0,2h3.77a1,1,0,0,0,0-2Z"
                                                    />
                                                    <path
                                                        className="fill-[#3d3d63]"
                                                        d="M24.7,18.12H30a1,1,0,0,0,0-2H24.7a1,1,0,0,0,0,2Z"
                                                    />
                                                    <path
                                                        className="fill-[#3d3d63]"
                                                        d="M19,23.79H35.64a1,1,0,0,0,0-2H19a1,1,0,0,0,0,2Z"
                                                    />
                                                    <path
                                                        className="fill-[#3d3d63]"
                                                        d="M36.64,27.83a1,1,0,0,0-1-1H19a1,1,0,0,0,0,2H35.64A1,1,0,0,0,36.64,27.83Z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>


                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        analysis
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        general settings
                                    </span>
                                </a>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                <form action="#">
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>

                        <span
                            className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                            Logout
                        </span>
                    </button>

                </form>
            </div>
        </div>
    )
}

export default SideNav
