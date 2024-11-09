import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        alert(e)
    }


  return (
    <div className='flex w-screen h-screen items-center justify-center'>
        
      <div className='border-2 border-emerald-600 p-20'>
      <h1 className='justify-center'>Login</h1>
        <form className='flex flex-col items-center justify-center' onSubmit={(e) => {submitHandler(e)}}>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-grey-400' type='email' placeholder='Enter Your Email...'/>
            <input value={pwd} onChange={(e)=>{setPwd(e.target.value)}} required className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-grey-400 mt-4' type='password' placeholder='Enter Password...'/>
            <button className='text-white outline-none border-none bg-emerald-600 py-3 px-5 rounded-full placeholder:text-white mt-5'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
