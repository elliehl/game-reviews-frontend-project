import { useState } from "react"
import './Styles/NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
        <Link to='/' className="nav-button">Home</Link>
        <Link to='/categories' className="nav-button">See All Categories</Link>
        </div>
    )
}

export default NavBar