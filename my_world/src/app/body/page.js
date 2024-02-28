import Image from "next/image"
import Img from "../images/profile.jpg"
import "../../asset/body.css"
import Script from "next/script"
import React from 'react'
import js from"../javascript/text"
const page = () => {
  return (
    <>
    <div className="main-container">
      <div className="image-container">
        <Image src={Img} alt="image" loading="lazy" className="image"></Image>

      </div>
        <h1>
          <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
            <span class="wrap"></span>
          </a>
        </h1>
    </div>
    <Script src={js}></Script>
    </>
  )
}

export default page