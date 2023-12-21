import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <h2>Login</h2>
        <form>
            <div>
                <label >E-mail address</label>
                <input type="text" />
            </div>
            <div>
                <label >Password</label>
                <input type="text" />
            </div>
        </form>
    </div>
  )
}

export default LoginForm
