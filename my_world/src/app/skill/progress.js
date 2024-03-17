import React from 'react'
import Image from 'next/image'
import "../../asset/skill.css"
import Img1 from "../images/html.png"
import Img2 from "../images/css-3.png"
import Img3 from "../images/java-script.png"
import Img4 from "../images/react.png"
import Img5 from "../images/python.png"
import Img6 from "../images/letter-c.png"
const progress = () => {
  return (
    <>
    <div className="skill">
      <div className="container">
      <Image src={Img1} alt="image" loading="lazy" className="skill-logo"></Image>
      <progress className='progress html' value={90} max={100} />
      </div>

      <div className="container">
      <Image src={Img2} alt="image" loading="lazy" className="skill-logo"></Image>
      <progress className='progress css' value={80} max={100} />
      </div>

      <div className="container">
      <Image src={Img3} alt="image" loading="lazy" className="skill-logo"></Image>
      <progress className='progress js' value={50} max={100} />
      </div>

      <div className="container">
      <Image src={Img4} alt="image" loading="lazy" className="skill-logo"></Image>
      <progress className='progress react' value={50} max={100} />
      </div>

      <div className="container">
      <Image src={Img5} alt="image" loading="lazy" className="skill-logo"></Image>
      <progress className='progress python' value={45} max={100} />
      </div>

      <div className="container">
      <Image src={Img6} alt="image" loading="lazy" className="skill-logo"></Image>
      <progress className='progress c' value={40} max={100} />
      </div>
    </div>

    </>
  )
}

export default progress