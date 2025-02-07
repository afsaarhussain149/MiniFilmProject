import React, { useEffect } from 'react'

const ImanageEmployeeApi = () => {

    const apiFetch = async()=>{
        const api = await fetch('https://localhost:7046/api/EmployeeDetails/AllUserDetail')
        const data = await api.json();

        console.log(data);
    }

    useEffect(()=>{
        apiFetch();
    },[])
  return (
    <>
      
    </>
  )
}

export default ImanageEmployeeApi
