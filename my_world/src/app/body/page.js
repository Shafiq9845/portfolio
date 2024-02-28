import Image from "next/image"
import Img from "../images/profile.jpg"
import "../../asset/body.css"
import React from 'react'
const page = () => {
  return (
    <>
    <div className="main-container">
      <div className="image-container">
        <Image src={Img} alt="image" loading="lazy" className="image"></Image>

      </div>
      <div class="typing-slider">
        <p>𝐻𝒾 𝒢𝓊𝓎𝓈.....</p>
        <p>𝐼 𝒜𝓂 𝒮𝒽𝒶𝒻𝒾𝓆.</p>
        <p>𝐼 𝒜𝓂 𝒜 𝒲𝑒𝒷 𝒟𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇.</p>            
      </div>
    </div>
    
    </>
  )
}

export default page