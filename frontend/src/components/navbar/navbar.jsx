import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
      const [menu,setMenu]= useState('home')

  return (
    <div className='navbar'>
        <div className='nav-logo'>
     <div>BLOG</div>
     </div>
    <ul className='nav-menu'>
        <li onClick={()=>{setMenu('home')}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('add_blog')}}><Link style={{textDecoration: 'none'}} to='/add_blog'>Add Blog</Link>{menu==='add_blog'?<hr/>:<></>}</li>
      
    </ul>
     </div>
    
  )
}
export default Navbar;