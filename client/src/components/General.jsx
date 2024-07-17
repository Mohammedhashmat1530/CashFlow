import React from 'react'
import { SignedIn, SignedOut,} from "@clerk/clerk-react";
import { Announcement,Content, SideNav} from '../components/index'
import { Outlet } from 'react-router-dom';
const General = () => {
  return (
    <>
    <SignedOut>
      <Announcement />
      <Content />
    </SignedOut>
   

    <SignedIn>
      <SideNav>

        <Outlet />
      </SideNav>
    </SignedIn> 
    </>
  )
}

export default General
