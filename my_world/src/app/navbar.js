// import React from 'react';
// import "../asset/navbar.css";
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <>
//       <input type="checkbox" id="check" />
//       <label className="button bars" htmlFor="check">X<i className="fas fa-bars"></i></label>
//       <div className="side_bar">
//         <div className="title">
//           <label className="button cancel" htmlFor="check"><i className="fas fa-times"></i></label>
//         </div>
//         <div></div>
//         <nav className="main_container">
//           <div className="left_container">
//             <h3>My World</h3>
//           </div>
//           <div className="center_container">
//             <Link href="/">Home</Link>
//             <Link href="/About-us">About Us</Link>
//             <Link href="/our-work">Our Work</Link>
//             <Link href="/contact-us">Contact Us</Link>
//           </div>
//           <div className="right_container">
//             <a href="https://www.linkedin.com/in/shafiq-undefined-a850382b7/" className="fa fa-linkedin"></a>
//             <a href="https://twitter.com/ShafiqSiddiq11" className="fa fa-twitter"></a>
//             <a href="https://www.instagram.com/iem_shafiq" className="fa fa-instagram"></a>
//             <a href="https://github.com/Shafiq9845" className="fa fa-github"></a>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React from 'react';
import "../asset/navbar.css";
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
        My World
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About-us">About Us</Link></li>
          <li><Link href="/our-work">Our Work</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
          <div className='right'>
          <li><a href="https://www.linkedin.com/in/shafiq-undefined-a850382b7/" className="fa fa-linkedin"></a></li>
          <li><a href="https://twitter.com/ShafiqSiddiq11" className="fa fa-twitter"></a></li>
          <li><a href="https://www.instagram.com/iem_shafiq" className="fa fa-instagram"></a></li>
          <li><a href="https://github.com/Shafiq9845" className="fa fa-github"></a></li> 
          </div>
          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;