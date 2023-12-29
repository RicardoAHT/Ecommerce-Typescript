import React from 'react'
import { Link } from 'react-router-dom'
import CounterElements from './CounterElements'

const NavBar: React.FC = () => {
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
                <Link to="/purchases/:id">
                    Purchases
                </Link>
            </li>
        </ul>
        <Link to="/cart">
            <CounterElements/>
        </Link>
    </nav>
  )
}

export default NavBar
