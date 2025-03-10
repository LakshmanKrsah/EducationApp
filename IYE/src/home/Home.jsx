import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import FreeCourse from '../component/FreeCourse'
import Footer from '../component/Footer'
import Testimonials from '../page/Testimonials'

function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <FreeCourse />
        <Testimonials />

        <Footer />
    </>
  )
}

export default Home
