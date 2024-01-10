import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: number
};

const SigninForm: React.FC = () => {

  //? Utlizo React-hook-form para la validacion de formularios
  const  {register, handleSubmit, formState: {errors}, /*reset*/} = useForm<Inputs>() //desestructuracion de useForm
  const onSubmit: SubmitHandler<Inputs> = (data) => { // La funcion submit para el formulario
    console.log(data)
  };

  return (
    <section className='registerForm'>
      <h2 className='registerForm__h2'>Sign in</h2>
      <form className='registerForm__form' onSubmit={handleSubmit(onSubmit)}>
          <div className='registerForm__form__div'>
            <label className='registerForm__form__label' htmlFor='firstName' >Nombre: </label>
            <input className='registerForm__form__input' {...register("firstName", {required:true})} type='text' id='firstName' />
            {errors.firstName && <span>This field is required</span>}
          </div>
          <div className='registerForm__form__div' >
              <label className='registerForm__form__label' htmlFor='lastName' >Apellidos: </label>
              <input className='registerForm__form__input' {...register("lastName", {required:true})} type='text' id='lastName' />
              {errors.lastName && <span>This field is required</span>}
          </div>
          <div className='registerForm__form__div'>
            <label className='registerForm__form__label' htmlFor='email' >E-mail:</label>
            <input className='registerForm__form__input' {...register("email", {required:true})} type='text' id='email' />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className='registerForm__form__div'>
            <label className='registerForm__form__label' htmlFor='password' >Password:</label>
            <input className='registerForm__form__input' {...register("password", {required:true, minLength:4})} type='password' id='password' />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className='registerForm__form__div'>
            <label className='registerForm__form__label' htmlFor='phone' >Telefono: </label>
            <input className='registerForm__form__input' {...register("phone", {required:true, minLength:7})} type='number' id='phone' />
            {errors.phone && <span>This field is required</span>}
          </div>
          <button className='registerForm__form__button' type="submit">
            Enviar
          </button>
      </form>
    </section>
  )
}

export default SigninForm
