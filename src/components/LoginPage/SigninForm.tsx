import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  email: string,
  password: string,
};

const SigninForm = () => {

  const  {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div>
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label >E-mail address</label>
                <input {...register("email", {required:true})} />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <label >Password</label>
                <input {...register("password", {required:true, minLength:7})} />
                {errors.password && <span>This field is required</span>}
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}

export default SigninForm
