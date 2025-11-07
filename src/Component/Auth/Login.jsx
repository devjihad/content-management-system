import React from 'react';

const Login = ({Click}) => {
    // console.log(Click)
    const done=(e)=>{
    e.preventDefault()
    let email = e.target.email.value
    let pass = e.target.pass.value
   
    console.log(email, pass)
    Click(email, pass)
    
    }
    return (
        <div className='flex justify-center items-center h-screen font-serif'>
            <form onSubmit={done} className='flex flex-col gap-5 border-2 px-20 py-12 rounded-xl border-gray-400'>
                <input type="email" name="email" placeholder='Enter your email' className='border-1 outline-0 border-green-300 px-5 py-2 rounded-xl w-[300px]' />
                <input type="password" name="pass" placeholder='Enter password' className='border-1 outline-0 border-green-300 px-5 py-2 rounded-xl w-[300px]' />
                <button className='border-1 outline-0 border-green-300 bg-green-500 px-5 py-2 rounded-xl text-xl w-[300px]'>Submit</button>
            </form>
        </div>
    );
};

export default Login;