import React from 'react'

const Person = (child) => {

    const person ={
      name: 'Afsar Hussain',
      age : 22,
      gender : 'Male',
      designation : 'Software Developer'
    };

    const personStyle = {
      color:'blue'
    }

  return (
    <>
      <div className='m-5' style={{color:'red'}}>
        <h6 className='text-center'>{child.name || person.name}</h6>
        <h6 className='text-center'>{child.gender || person.gender}</h6>
        <h6 className='text-center'>{child.age || person.age}</h6>
        <h6 className='text-center' style={personStyle}>{child.designation || person.designation}</h6>
      </div>
    </>
  )
}

export default Person