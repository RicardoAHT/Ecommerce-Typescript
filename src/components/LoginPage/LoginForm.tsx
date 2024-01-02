import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

type Inputs = {
  email: string,
  password: string,
};


const LoginForm: React.FC = () => {

  const {register, handleSubmit, /*reset, watch*/} = useForm<Inputs>()
  const {loginUser} = useAuth() //Para enviar la informacion del usuario loggeado

  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
