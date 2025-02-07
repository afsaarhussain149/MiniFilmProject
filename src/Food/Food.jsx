import React, { useEffect, useState } from 'react'

const Food = () => {

    const[food, setfood] = useState([]);
    const[foodItems, setFoodItems] = useState('indian')
    
    useEffect(()=>{
       const MealApiFetch = async()=>{
        const Api = await fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?a=${foodItems}`)
        const response = await Api.json();
        console.log(response);
        setfood(response.meals)
       } 
       MealApiFetch();
    },[foodItems])

  return (
    <>
        <div className='d-flex flex-wrap justify-content-end bg-info'>
            <button type="button" style={{background:'none'}} onClick={()=>setFoodItems("Indian")} className="border-0 btn-btn-secondary mx-2">Indian</button>
            <button type="button" style={{background:'none'}} onClick={()=>setFoodItems("Canadian")} className="border-0 btn-btn-success mx-2">Canadian</button>
            <button type="button" style={{background:'none'}} onClick={()=>setFoodItems("thai")} className="border-0 btn-btn-warning mx-2">Thai</button>
            <button type="button" style={{background:'none'}} onClick={()=>setFoodItems("british")} className="border-0 btn-btn-info mx-2">British</button>
            <button type="button" style={{background:'none'}} onClick={()=>setFoodItems("russian")} className="border-0 btn btn-btn-outline-light mx-2">Russian</button>
        </div>

        <div className='d-flex justify-content-center align-items-center flex-wrap'>
            {food.map((e,idMeal)=>(
                <div key={idMeal} className='text-center'>
                    <div>
                        <img src={e.strMealThumb} alt='' style={{width:'220px'}} className='border border-info border-4 rounded-3 m-3'/>
                    </div>
                    <h6>{e.strMeal}</h6>
                </div>  
            ))}
        </div>
    </>
  )
}
export default Food