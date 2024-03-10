import Image from "next/image"
import Img from "../images/IMG_20240310_082201.png"
import "../../asset/body.css"
import React from 'react'
import About from '../About-me/page'
import Navbar from "../navbar"
import Footer from "../contact-me/page"
const page = () => {
  return (
    <>
    <Navbar/>
    <div className="main-container">
      <div class="typing-slider">
        <p>Hi Guys...</p>
        <p>I Am Shafiq.</p>
        <p>I Am A Web Developer.</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/shafiq-undefined-a850382b7/" className="fa fa-linkedin"></a>
          <a href="https://twitter.com/ShafiqSiddiq11" className="fa fa-twitter"></a>
          <a href="https://www.instagram.com/iem_shafiq" className="fa fa-instagram"></a>
          <a href="https://github.com/Shafiq9845" className="fa fa-github"></a>  
        </div>            
      </div>
      <div className="image-container">
        <Image src={Img} alt="image" loading="lazy" className="image"></Image>

      </div>
    </div>
    <About  className='about'/>
    <Footer/>
    </>
  )
}

export default page