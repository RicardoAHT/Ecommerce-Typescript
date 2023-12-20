import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='appBar'>
        <ul className='appBar__ul'>
            <li className='appBar__ul__li'>
                <Link to="/">
                Home
                </Link>
            </li>
            <li className='appBar__ul__li'>
                <Link to="/login">
                    LogIn
                </Link>
            </li>
            <li className='appBar__ul__li'>
                <Link to="/logOut">
                    LogOut
                </Link>
            </li>
            <li className='appBar__ul__li'>
                Purchases
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
