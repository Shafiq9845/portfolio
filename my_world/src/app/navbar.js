import React from 'react'
import "../asset/navbar.css"
import Link from 'next/link'
const navbar = () => {
  return (

    <nav className="main_container">

        <div className="left_container">
            <h3>My World</h3>
        </div>

        <div className="center_container">

            <Link href="/">Home</Link>
            <Link href="/About-us">About Us</Link>
            <Link href="/our-work">Our Work</Link>
            <Link href="/contact-us">Contact Us</Link>

        </div>

        <div className="right_container">
        <a href="https://www.linkedin.com/in/shafiq-undefined-a850382b7/" class="fa fa-linkedin"></a>
        <a href="https://twitter.com/ShafiqSiddiq11" class="fa fa-twitter"></a>
        <a href="https://www.instagram.com/iem_shafiq" class="fa fa-instagram"></a>
        <a href="https://github.com/Shafiq9845" class="fa fa-github"></a>
        </div>

    </nav>

  )
}

export default navbar