import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Project.css'

function Project(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
  return (
    <div className='main-container' id={props.id || ""}>
    <ScreenHeading subHeading={"Here are my projects"} title={"My Projects"}/>
    <br/>
    <br/>
    <br/>
    <div className='project-container'>
        <div className='project1'>
            <div className='title'>Lifestyle Clone</div>
            <div>
                <img className='image' src='http://www.customercarephonenumber.in/blog/wp-content/uploads/2018/03/Screenshot-9.png'/>
                <div className='description'>An e-commerce website to purchase any clothes,shoes,bags etc</div>
            </div>
            <div className='inner-div'>
                <div className='description'>Tech Stack : HTML | CSS | JAVASCRIPT</div>
                <div className='button-div'>
                    <a href='https://github.com/rituraj776930/LifeStyleStores' target="_blank"><button className="button1">Git-hub</button></a>
                    <a href='https://elastic-volhard-0f1c35.netlify.app/' target="_blank"><button className='button2'>Go Live</button></a>
                </div>
            </div>
        </div>


        <div className='project1'>
            <div className='title'>Pottery Barn Clone</div>
            <div>
                <img className='image' src='https://assets.pbimgs.com/pbimgs/rk/images/dp/ecm/202041/2546/040/534.jpg'/>
                <div className='description'>An e-commerce website to purchase any furniture,home decorators,lights,tc</div>
            </div>
            <div className='inner-div'>
                <div className='description'>Tech Stack : HTML | CSS | JAVASCRIPT</div>
                <div className='button-div'>
                    <a href='https://github.com/rituraj776930/Pottery-barn' target="_blank"><button className="button1">Git-hub</button></a>
                    <a href='https://lustrous-trifle-c36f07.netlify.app/' target="_blank"><button className='button2'>Go Live</button></a>
                </div>
            </div>
        </div>


        <div className='project1'>
            <div className='title'>Sugar Cosmetics Clone</div>
            <div>
                <img className='image' src='https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/SUGAR%20Cosmetics%20Oberoi%20mall%20store%20%282%29%20%281%29_0.jpg'/>
                <div className='description'>A cosmetics store for purchase of beautify products like face musk,moisturixers,eye lashes etc</div>
            </div>
            <div className='inner-div'>
                <div className='description'>Tech Stack : React | Redux </div>
                <div className='button-div'>
                    <a href='https://github.com/rituraj776930/sugarcosmetics-app-clone' target="_blank"><button className="button1">Git-hub</button></a>
                    <a href='https://admirable-sfogliatella-7667e1.netlify.app/' target="_blank"><button className='button2'>Go Live</button></a>
                </div>
            </div>
        </div>


        
        
    </div>
    </div>
  )
}

export default Project