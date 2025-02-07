import React, { useState } from 'react'

const Form =()=>{

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        alert('Submitted:'+ name +" "+ email +" "+ password)

        setName('')
        setEmail('')
        setPassword('')
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='bg-white m-2 col-sm-2 text-dark' />
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='bg-white m-2 col-sm-2 text-dark' />
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='bg-white m-2 col-sm-2 text-dark' />
                    <button type='submit' className='btn btn-outline-success'>Submit</button>
                </div>
            </form>

            <div>
                {name}<br></br>
                {email}<br></br>
                {password}<br></br>
            </div>
        </>
    )
}
export default Form;