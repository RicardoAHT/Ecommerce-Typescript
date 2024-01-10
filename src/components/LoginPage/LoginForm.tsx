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
    <section className='registerForm'>
        <h2 className='registerForm__h2'>Login</h2>
        <form className='registerForm__form' onSubmit={handleSubmit(onSubmit)}>
          <div className='registerForm__form__div'>
            <label className='registerForm__form__label' >E-mail:</label>
            <input className='registerForm__form__input' {...register("email")} type="email" />
          </div>
          <div className='registerForm__form__div'>
            <label className='registerForm__form__label' >Password:</label>
            <input className='registerForm__form__input' {...register("password")} type="password"  />
          </div>
          <button className='registerForm__form__button' type="submit">
            Enviar
          </button>
        </form>
    </section>
  )
}

export default LoginForm
