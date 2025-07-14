import { useState } from 'react'
import './App.css'
import NavbarF from './components/Navbar/Navbar'
import {Hero} from './components/Hero/Hero'
import { Universe } from './components/Universe/Universe'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <>
      <NavbarF/>
      <Hero/>
      <Universe/>
      <Footer/>
    </>
  )
}

export default App
