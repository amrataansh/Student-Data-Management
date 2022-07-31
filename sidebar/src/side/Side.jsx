import React from 'react'
import { Link } from 'react-router-dom'
import './side.css'

export default function Side({sidebar}) {
  return (
      <div className={sidebar?"sidebar sidebar-open":"sidebar"}>
        <Link to="/"><li>Home<i className="sidebarIcon fa-solid fa-house"></i></li></Link>
        <Link to="/student"><li>Student<i className="sidebarIcon fa-solid fa-desktop"></i></li></Link>
        <Link to="/contact"><li>Contact Us<i className="sidebarIcon fa-solid fa-phone"></i></li></Link>
        <Link to="/faculty"><li>Faculty<i className="sidebarIcon fa-solid fa-address-card"></i></li></Link>
      </div>
  )
}
