import React from 'react'

export const Signin = () => {

    const handleSubmit = (event) => {
        
    }

  return (
    <div>
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit} >
        <div>
            <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
          />
        </div>
        <div>
            <label htmlFor="">Email</label>
            <input
            type= "text"
            name= "email"
            placeholder='your email'
            />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input
            type= "text"
            name= "password"
            placeholder='your password'
            />
        </div>
        </form>
        <button>Sign up</button>
    </div>
  )
}
