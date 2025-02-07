import React, { useState } from 'react'

const MultiColumn = () => {

    const[ dataForm, setDataForm] = useState({
        name:'',
        age:'',
        gender:'',
        email:'',
        phone:'',
        designation:'',
        address:''
    })

    const handleChange =(e)=>{
        const{name,value} = e.target;
        setDataForm({...dataForm, [name]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(dataForm)
    }


  return (
    <>
        <form onSubmit={handleSubmit} className='d-flex justify-content-center mt-5'>
            <div className='container p-4 m-4 card shadow' style={{width:'40%'}}>
                <div className='row m-3'>
                    <h2 className='text-center mb-4s'>Registration Form</h2>
                    <div className='col-sm-6'>
                        <h6 className='m-2'>Name:</h6>
                        <input  type='text' value={dataForm.name} placeholder='Name' onChange={handleChange} name='name' className='form-control m-2' />

                        <h6 className='m-2'>Age:</h6>
                        <input  type='text' value={dataForm.age} placeholder='Age' onChange={handleChange} name='age' className='form-control m-2' />

                        <h6 className='m-2'>Gender:</h6>
                        <input  type='text' value={dataForm.gender} placeholder='Gender' onChange={handleChange} name='gender' className='form-control m-2' />
                    </div>

                    <div className='col-sm-6'>
                        <h6 className='m-2'>Email:</h6>
                        <input  type='text' value={dataForm.email} placeholder='Email' onChange={handleChange} name='email' className='form-control m-2' />

                        <h6 className='m-2'>Phone No:</h6>
                        <input  type='text' value={dataForm.phone} placeholder='Phone No.' onChange={handleChange} name='phone' className='form-control m-2' />
                        
                        <h6 className='m-2'>Desigation:</h6>
                        <input  type='text' value={dataForm.designation} placeholder='Desigation' onChange={handleChange} name='designation' className='form-control m-2' />
                    </div>

                    <div className='col-sm-12'>
                        <h6 className='m-2'>Address:</h6>
                        <input  type='text' value={dataForm.address} placeholder='Address' onChange={handleChange} name='address' className='form-control m-2' />
                        <button type='submit' className='btn btn-outline-success form-control m-2'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
export default MultiColumn