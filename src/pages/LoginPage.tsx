import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import LoginForm from '../components/LoginPage/LoginForm'
import SigninForm from '../components/LoginPage/SigninForm'

const LoginPage = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <LoginForm/>
      <SigninForm/>
    </div>
  )
}

export default LoginPage
