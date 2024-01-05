import React from 'react'
import { Link } from 'react-router-dom'
import CounterElements from './CounterElements'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const NavBar: React.FC = () => {
    const logged = useSelector( (store: RootState) => store.logged) // Estado global que me indica si el usuario esta loggeado o no

  return (
    <nav className='appBar'>
        <ul className='appBar__ul'>
            <li className='appBar__ul__li'>
                <Link to="/">
                Home
                </Link>
            </li>
            {
                !logged // Verifico si esta logeado o no
                ?
                    <li className='appBar__ul__li'>
                        <Link to="/login">
                            LogIn
                        </Link>
                    </li>
                :
                    <li className='appBar__ul__li'>
                        <Link to="/logOut">
                            LogOut
                        </Link>
                    </li>
            }
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
