import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.scss"


const Header = () => {

    return (
        <nav>

            <ul>
                <h1>Suyash_Karne</h1>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/review'>Review</Link></li>
                

            </ul>

        </nav>

    )
}

export default Header
