import React, { useState } from 'react'

const MapusingState = () => {
    const[isShowDetails, setShowDetails] = useState(false)
    const[person,setPerson]= useState({
      id:1,  
      name:'Afsar Hussain',
      desigation:'Software developer',
      gender:'Male',
      age:22,
      status:true,
      email:'afsarlogicsoft@gmail.com',
      phone_no:9355217186,
      address:'delhi',
    })

    const handleChange =(e)=>{
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setShowDetails(true);
    }
    
  return (
    <>
      {isShowDetails ?
      <div>
        <h1>{person.id || null}</h1>
        <h1>{person.name}</h1>
        <h1>{person.desigation}</h1>
        <h1>{person.gender}</h1>
        <h1>{person.age}</h1>
        <h1>{person.status}</h1>
        <h1>{person.email}</h1>
        <h1>{person.address}</h1>
      </div> : ' '}
    
      <form onSubmit={handleSubmit}>
        <div>
        <input type='text' placeholder='ID' name='id' value={person.id} onChange={handleChange} className='bg-white text-black' />
        <input type='text' placeholder='Name' name='name' value={person.name} onChange={handleChange} className='bg-white text-black' />
        <input type='text' placeholder='Desigation' name='desigation' value={person.desigation} onChange={handleChange} className='bg-white text-black' />
        <input type='text' placeholder='Gender' name='gender' value={person.gender} onChange={handleChange} className='bg-white text-black'/>
        <input type='text' placeholder='Age' name='age' value={person.age} onChange={handleChange} className='bg-white text-black'/>
        <input type='text' placeholder='Status' name='status' value={person.status} onChange={handleChange} className='bg-white text-black'/>
        <input type='email' placeholder='Email' name='email' value={person.email} onChange={handleChange} className='bg-white text-black'/>
        <input type='text' placeholder='address' name='address' value={person.address} onChange={handleChange} className='bg-white text-black'/>
        <button type='submit' className='btn btn-success m-4'>submit</button>
        </div>
      </form>
    </>
  )
}
export default MapusingState