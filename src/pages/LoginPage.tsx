import React, { useState } from 'react'
import NavBar from '../components/shared/NavBar'
import Header from '../components/shared/Header'
import LoginForm from '../components/LoginPage/LoginForm'
import SigninForm from '../components/LoginPage/SigninForm'
import Registered from '../components/LoginPage/Registered'

const LoginPage: React.FC = () => {

  const [registered, setRegistered] = useState(false)

  return (
    <div>
      <NavBar/>
      <Header/>
      <div className='formContainer'>
        {
          registered
          ?
          <SigninForm/>
          :
          <LoginForm/>
        }

      </div>
      <Registered
        registered = {registered}
        setRegistered = {setRegistered}
      />
    </div>
  )
}

export default LoginPage
