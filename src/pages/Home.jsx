import React, { useEffect } from 'react'
import Herosection from '../components/Herosection'
import AboutSection from '../components/AboutSection'
import SpecialOffers from '../components/SpecialOffers'
import RoomsSlider from '../components/RoomsSlider'
import Amenities from '../components/Amenities'
import FunFacts from '../components/FunFacts'
import OffersSection from '../components/OffersSection'
import VideoSection from '../components/VideoSection'
import Testimonials from '../components/Testimonials'
import ReservationForm from '../components/ReservationForm'
import BlogSection from '../components/sections/BlogSection'
import WhatsAppSticky from '../components/WhatsAppSticky'
import CallSticky from '../components/CallSticky'
import Franchise from '../components/Franchise'
import HomeResto from '../components/HomeResto'
import Homeslider from '../components/Sliders/Homeslider'
import Feedback from '../components/home/Feedback'
import TopDestination from '../components/home/TopDestination'
import GettoKnow from '../components/home/GettoKnow'
import TopDeal from '../components/home/TopDeal'


export default function Home() {
  useEffect(() => {


    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Herosection />
      <Homeslider />
      <Feedback />
      <TopDestination />
      <GettoKnow />
      {/* <div className='h-96 bg-green-500 flex gap-x-6
      ' >
        <div className='w-64 h-64 bg-red-500' >

        </div>
        <div className='w-64 h-64 bg-red-500' >

        </div>
        <div className='w-64 h-64 bg-red-500' >

        </div>
        <div className='w-64 h-64 bg-red-500' >

        </div>

      </div> */}
      <TopDeal />
      {/* <div className='h-96 bg-blue-500 flex gap-x-6 text-center justify-center items-center
      ' >
        <h1>video </h1>

      </div> */}

      
    </div>
  )
}

