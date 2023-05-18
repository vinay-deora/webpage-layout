import React from 'react'
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link"
const Header = () => {
  return (
 <nav>
  <h1>Techgun</h1>
  <main>
    <HashLink to ={ "/#home"}>Home</HashLink>
    {/* <Link to ={ "/#home"}>Home</Link> */}
    {/* <Link to ={ "/contact"}>CONTACT</Link> */}
    <HashLink to ={ "/#about"}>ABOUT</HashLink>
    <HashLink to ={ "/#brand"}>BRAND</HashLink>
    <HashLink to ={ "/#contact"}>CONTACT</HashLink>
    
    {/* <Link to ={ "/#about"}>ABOUT</Link>
    <Link to ={ "/#brand"}>BRAND</Link> */}
    <HashLink to ={ "/#service"}>SERVICE</HashLink>
  </main>
 </nav>
  )
}

export default Header
