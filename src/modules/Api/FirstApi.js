import React, { useEffect } from 'react'
const FirstApi = () => {

    useEffect(()=>{

        const FetchApi = async()=>{
            const api = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = api.json();
            console.info(data)
        }
        FetchApi();
    },[])
  
    return (
    <>

    </>
  )
}
export default FirstApi

