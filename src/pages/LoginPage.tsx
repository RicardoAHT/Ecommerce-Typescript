import React from 'react'
import NavBar from '../components/shared/NavBar'
import Header from '../components/shared/Header'
import LoginForm from '../components/LoginPage/LoginForm'
import SigninForm from '../components/LoginPage/SigninForm'

const LoginPage: React.FC = () => {
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
