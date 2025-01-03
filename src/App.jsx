import React, { useState } from 'react'
import Navbar from './compenents/Navbar'
import Landing from './compenents/Landing'
import Work from './compenents/Work'
import Playreel from './compenents/Playreel'
import Images from './compenents/Images'
import News from './compenents/News'
import Footer from './compenents/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Preloader from './compenents/Preloader'

const App = () => {
  const [showPreloader, setShowPeloader] = useState(true)
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-slate-800'>
      {showPreloader ? (<Preloader setShowPeloader={setShowPeloader} />) : 
      (
        <>
      <Navbar />
      <Landing />
      <Work />
      <Playreel />
      <Images />
      <News />
      <Footer />
        </>
      )
      }
    </div>
  )
}

export default App
