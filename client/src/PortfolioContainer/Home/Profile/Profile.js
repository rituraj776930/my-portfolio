import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService'
import './Profile.css'

function Profile() {
    
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.facebook.com/rituraj.singh.1614' target="_blank">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/ritu.raj.singham/?hl=en' target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://twitter.com/RITURAJ55689499' target="_blank">
                            <i className='fa fa-twitter'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/ritu-raj-singh-a91bb9176/' target="_blank">
                            <i className='fa fa-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className="highlighted-text">Ritu Raj Singh</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic Dev 💻",
                                1000,
                                "Full Stack Web Developer 🖥",
                                1000,
                                "Mern Stack Developer 💻",
                                1000,
                                "React/React Native Developer💻",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        
                        Hire Me
                    </button>
                    <a href='https://drive.google.com/file/d/1v79_g6WK9q7PPb7Ep5hr7HlOZrLmHf3u/view?usp=sharing'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a> 
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}

export default Profile