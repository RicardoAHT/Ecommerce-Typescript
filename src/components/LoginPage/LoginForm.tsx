import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

type Inputs = {
  email: string,
  password: string,
};


const LoginForm = () => {

  const {register, handleSubmit, reset, watch} = useForm()
  const {loginUser} = useAuth()

  const onSubmit = (data) => {
    loginUser(data)
  }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label >E-mail address</label>
                <input {...register("email")} type="email" />
            </div>
            <div>
                <label >Password</label>
                <input {...register("password")} type="password"  />
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}

export default LoginForm
