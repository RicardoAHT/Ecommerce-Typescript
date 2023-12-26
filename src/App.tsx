import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PurchasesPage from './pages/PurchasesPage'
import LoginPage from './pages/LoginPage'
import LogOutPage from './pages/LogOutPage'
import CartPage from './pages/CartPage'
import { useDispatch } from 'react-redux'
import { setCredentialsSlice } from './store/slices/credentials.slice'
import ProtectedRoutes from './pages/ProtectedRoutes'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => { // Cada vez que se actualice la pagina le vamos a pasar los valores del localStorage al estado global de credentials
    const token = localStorage.getItem("token")
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const obj = { token, name, email}
    dispatch(setCredentialsSlice(obj))
  }, [])
  

  return (
    <div>
      <h2>App</h2>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/logout' element={<LogOutPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/purchases/:id' element={<PurchasesPage/>}/>
          <Route path="/cart" element={<CartPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
