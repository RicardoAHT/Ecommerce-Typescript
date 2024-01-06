import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import LoginPage from './LoginPage'
import LogOutPage from './LogOutPage'

const LoggedPage: React.FC = () => {

    const logged = useSelector( (store: RootState) => store.logged)

    if(!logged){
      return(
        <div>
          <LoginPage/>
        </div>
      )
    }

  return (
    <div>
      <LogOutPage/>
    </div>
  )
}

export default LoggedPage