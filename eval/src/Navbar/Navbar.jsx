import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
  
  return (
    <div style={{display:"flex",justifyContent:"space-between",marginLeft:"20%",marginRight:"20%"}}>
        <Link to='/login' >Login</Link>
        <Link to='/' >HOME</Link>
        <Link to='/cart'>Cart</Link>
    </div>
  )
}

export default Navbar