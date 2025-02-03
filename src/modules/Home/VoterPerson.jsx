import React from 'react'

const VoterPerson = ({name, age}) => {
  return (
    <>
        <div className='text-center'>
            {age >= 18 ? <h5>{name}, YOU ARE ABLE FOR VOTE</h5> : <h5>{name},YOU ARE NOT ABLE FOR VOTE</h5> }
        </div>    
    </>
  )
}

export default VoterPerson
