import { useState } from 'react'
import './App.css'
import { Header,Announcement,Footer, Content } from './components/index'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
function App() {


  return (<>
    <Header/>
    <Announcement />
    <Content/>
    <Footer/>
    </>
  )
}

export default App
