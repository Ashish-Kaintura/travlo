import React, { useEffect } from 'react'
import Herosection from '../components/Herosection'
import Homeslider from '../components/Sliders/Homeslider'
import Feedback from '../components/home/Feedback'
import TopDestination from '../components/home/TopDestination'
import GettoKnow from '../components/home/GettoKnow'
import TopDeal from '../components/home/TopDeal'
import TourPackages from '../components/home/TourPackages'
import VideoSection from "../components/VideoSection"
import SpecialOffers from '../components/home/SpecialOffers'
import BlogCard from '../components/BlogCard'

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
      <TourPackages />
      <TopDeal />
      <VideoSection />
      {/* <SpecialOffers /> */}
      <BlogCard/>

    </div>
  )
}
