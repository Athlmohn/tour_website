import React from 'react'
import Welcome from '../Welcome/Welcome'
import Activities from '../Activity/Activities'
import Form from '../Booking/Form'
import Gallery from '../Gallery/Gallery'
import Contact from '../Contact/Contact'

function Home() {
  return (
   <>
   <Welcome/>
   <Activities/>
   <Form/>
   <Gallery/>
   <Contact/>
   </>
  )
}

export default Home