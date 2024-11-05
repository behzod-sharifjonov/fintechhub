import React from 'react'
import './views.css'
import Banner from '../components/Banner'
import About from '../components/About'
import CourseOne from '../components/CourseOne'
import Coursees from '../components/Coursees'
import Video_two from '../components/Video_two'
import ContactFrom from '../components/ContactFrom'
import Photos from '../components/Photos'
import ContainerThree from '../components/ContainerThree'
import Project from '../components/Project'
import Mailchimp from '../components/Mailchimp'

function Home() {
  return (
    <div className='home'>
      <Banner />
      <About />
      <CourseOne />
      <Coursees />
      <Video_two />
      <ContactFrom />
      <Photos />
      <ContainerThree />
      <div className="home-project">
        <h3>Hamkorlarimiz va qilgan ishlarimiz</h3>
        <Project />
      </div>
      <Mailchimp />
    </div>
  )
}

export default Home