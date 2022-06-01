import React, { useState } from 'react'
import Typical from 'react-typical'
import axios from 'axios'
import {toast} from 'react-toastify'

import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './ContactMe.css'

function ContactMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const [name , setname] = useState("")
    const [email , setemail] = useState("")
    const [message , setmessage] = useState("")
    const [banner , setbanner] = useState("")
    const [bool , setbool] = useState(false)

    const submitForm = async(e)=>{
        e.preventDefault()
        try{
            let data= {
                name,
                email,
                message
            }
            setbool(true)
            const res = await axios.post('/contact',data)
            if(name.length === 0 || email.length === 0 || message.length === 0){
                setbanner(res.data.msg)
                toast.error(res.data.msg)
                setbool(false)
            }
            else if(res.status === 200){
                setbanner(res.data.msg)
                toast.success(res.data.msg)
                setbool(false)
                setname("")
                setemail("")
                setmessage("")
            }
        }
        catch(error){
            console.log(error)
        }
        
    }

  return (
    <div className='main-container' id={props.id || ""}>
        <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"}/>
        <div className='central-form'>
            <div className='details'>
                <div className='text'><img className='img-div' src='https://p.kindpng.com/picc/s/81-817595_active-call-phone-icon-phone-black-and-white.png'/> 9840404214</div>
                <div className='text'>📧 rrs984040@gmail.com</div>
            </div>
            <div className='col'>
            <h2 className='title'>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Get In Touch 🤝",
                                1000,
                                "Get Your job done ✅",
                                1000,
                                "Email me 📧",
                                1000,
                            ]}
                            />
               </h2>
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
            <div className='back-form'>
                <div className='img-back'>
                    <h4>Send Your Email Here!</h4>
                    <img src={imgBack} alt='image not found' />
                </div>
                <form onSubmit={submitForm}>
                    <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type="text" onChange={(e)=>setname(e.target.value)}/>

                    <label htmlFor='email'>Email</label>
                    <input type="email" onChange={(e)=>setemail(e.target.value)}/>

                    <label htmlFor='message'>Message</label>
                    <textarea type="text" onChange={(e)=>setmessage(e.target.value)}/>

                    <div className='send-btn'>
                        <button type='submit'>
                            send<i className='fa fa-paper-plane'></i>
                            {bool ? (<b className='load'><img src={load1} alt="not able to load"/></b>) : ("")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactMe