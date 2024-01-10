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
                    Productos
                </Link>
            </li>
            {
                !logged // Verifico si esta logeado o no
                ?
                    <li className='appBar__ul__li'>
                        <Link to="/login">
                            Registro
                        </Link>
                    </li>
                :
                    <li className='appBar__ul__li'>
                        <Link to="/logOut">
                            Cerrar Sesion
                        </Link>
                    </li>
            }
            <li className='appBar__ul__li'>
                <Link to="/purchases/:id">
                    Historial
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
