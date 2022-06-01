import React from 'react'
import Footer from './Footer/Footer'
import Profile from './Profile/Profile'
import './Home.css'
import Header from './Header/Header'

function Home() {
  return (
    <div className='home-container'>
        <Header/>
        <Profile/>
        <hr/>
        <Footer/>
    </div>
  )
}

export default Home