import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PurchasesPage from './pages/PurchasesPage'
import LoginPage from './pages/LoginPage'
import LogOutPage from './pages/LogOutPage'

const App = () => {
  return (
    <div>
      <h2>App</h2>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/purchases/:id' element={<PurchasesPage/>}/>
        <Route path='/logout' element={<LogOutPage/>}/>
      </Routes>
    </div>
  )
}

export default App
