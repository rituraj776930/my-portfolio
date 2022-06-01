import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css';

function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle , setCarousalOffSetStyle] = useState({})
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading=(props)=>{
        return(
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span className='header'>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <dov className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </dov>
                    ):(
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        </div>
        )
    }

    const resumeBullets = [
        {label:"Education" , logoSrc:"https://www.pngfind.com/pngs/m/221-2219548_education-icon-png-education-logo-white-png-transparent.png"},
        {label:"Work History" , logoSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEZXBnT6-uERkKB4I95NUCthMLBlrnYjAMQ&usqp=CAU"},
        {label:"Programming Skills" , logoSrc:"https://media.istockphoto.com/illustrations/turn-off-laptop-icon-illustration-id694549736"},
        {label:"Projects" , logoSrc:"https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-signal-icon-png-image_987277.jpg"},
        {label:"Interests" , logoSrc:"https://static.vecteezy.com/system/resources/thumbnails/003/377/641/small/line-icon-for-human-brain-vector.jpg"},
    ];
    const programmingSkillDetails = [
        {skill : "JavaScript" , ratingPercentage: 60},
        {skill : "React JS" , ratingPercentage: 40},
        {skill : "React Native" , ratingPercentage: 40},
        {skill : "HTML" , ratingPercentage: 65},
        {skill : "CSS" , ratingPercentage: 60},
        {skill : "DS & Algo" , ratingPercentage: 70},
        {skill : "Github" , ratingPercentage: 40},
        {skill : "C++" , ratingPercentage: 50},
        {skill : "Node JS" , ratingPercentage: 50},
    ]
    const projectDetails = [
        {
            title:"Personal Prtfolio Website",
            duration:{fromDate:"2022", toDate:"2022"},
            description:"A personal Portfolio website to showcase all my details and projects at one place",
            subHeading:"Technologies Used: React JS, Bootstrap"
        },
        {
            title:"Pottery Barn Clone",
            duration:{fromDate:"2022", toDate:"2022"},
            description:"A personal Portfolio website to showcase all my details and projects at one place",
            subHeading:"Technologies Used: HTML,CSS"
        },
        {
            title:"Sugar Cosmetics Clone",
            duration:{fromDate:"2022", toDate:"2022"},
            description:"A personal Portfolio website to showcase all my details and projects at one place",
            subHeading:"Technologies Used: React JS, HTML,CSS,Redux"
        },
        
    ];
    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading heading={"Masai School"} subHeading={"Full Stack Web Developer"} fromDate={"2021"} toDate={"2022"} />
            <ResumeHeading heading={"Sathyabama Institute of Science and Technology"} subHeading={"CHEMICAL ENGINEERING"} fromDate={"2015"} toDate={"2019"} />
            <ResumeHeading heading={"Doon Public School"} subHeading={"Higher Secondary School Certificate"} fromDate={"2013"} toDate={"2015"} />
            <ResumeHeading heading={"De Nobili School"} subHeading={"Secondary School Certificate"} fromDate={"2002"} toDate={"2013"} />
        </div>,
        <div className='resume-screen-container' key="work-experience">
            <ResumeHeading heading={"Think & Learn pvt ltd (BYJU'S)"} subHeading={"Business Development Associate"} fromDate={"2020"} toDate={"2021"} />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently pursuing Full Stack Web Developer from Masai School
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                - Developed 3 e-commerce websites using React , HTML , CSS & Redux
                </span>
                <br/>
                <span className='resume-description-text'>
                A web application to buy home furniture and decoratives.Build features like Social Sign-in/Sign-up , Product page , User authentication , Add to cart page , payment page
                </span>
                <br/>
                <span className='resume-description-text'>
                - I stretch my mental capacity to develop UI as per the given designs
                </span>
            </div>
        </div>,
            <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillDetails.map((skill , index)=>(
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{width:skill.ratingPercentage + "%"}} className="active-percentage">

                        </div>
                    </div>
                </div>
            ))}
            </div>,
        

            <div className='resume-screen-container' key="projects">
                {
                    projectDetails.map((projectDetails , index)=>(
                        <ResumeHeading 
                            key={index} 
                            heading={projectDetails.title} 
                            subHeading={projectDetails.subHeading} 
                            description={projectDetails.description}
                            fromDate={projectDetails.duration.fromDate} 
                            toDate={projectDetails.duration.toDate}/>
                    ))
                }
            </div>,
            <div className='resume-screen-container' key="interests">
                <ResumeHeading
                heading="Playing Cricket"
                description='Apart from a Tech Enthusiast i also love playing cricket and was also captain of my college team during my college days'
                />
                <ResumeHeading
                heading="Travelling"
                description='I love to explore new places,especially places which are naturally very beautiful'
                />
                <ResumeHeading
                heading="Competitive Games"
                description='I like to challenge my reflexes a lot while playing mobiles games like BGMI'
                />
            </div>
    ]
    const handleCarousal = (index)=>{
        let offsetHeight = 360;
        let newCarousalOffset={
            style:{transform:"translateY("+ index * offsetHeight * -1+"px)"}
        }
        setCarousalOffSetStyle(newCarousalOffset)
        setSelectedBulletIndex(index);
    }

    const getBullets=()=>{
        return (resumeBullets.map((bullet , index)=>(
            <div onClick={()=>handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}
            >
                <img className='bullet-logo'
                src={bullet.logoSrc}
                alt='B'
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
        )
    }

    const getResumeScreen = ()=>{
        return(
            <div style = {carousalOffSetStyle.style}
            className='resume-details-carousal'
            >
            {resumeDetails.map((ResumeDetail)=> ResumeDetail)}
            </div>
        );
    };

  return (
      <>
      <br/>
      <br/>
      <br/>
    <div className='resume-container screen-container' id={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullet-details'>
                    {getResumeScreen()}
                </div>
            </div>
        </div>
    </div>
    <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Resume