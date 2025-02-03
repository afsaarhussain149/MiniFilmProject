import React, { useState } from 'react'
import { movies } from './Data'

const MoviesZone = () => {
    const[movieList, setMovieList] = useState(movies);

    const filterByCategory =(cat)=>{
        setMovieList(movies.filter((data)=> data.category === cat))
    }
  return (
    <>
        <div className='my-3 d-flex flex-wrap justify-content-center'>
            <button type="button" onClick={()=>setMovieList(movies)} className="btn btn-outline-primary mx-3">All</button>
            <button type="button" onClick={()=>filterByCategory("Action")} className="btn btn-outline-secondary mx-3">Action</button>
            <button type="button" onClick={()=>filterByCategory("Thriller")} className="btn btn-outline-success mx-3">Thriller</button>
            <button type="button" onClick={()=>filterByCategory("Animation")} className="btn btn-outline-danger mx-3">Animation</button>
            <button type="button" onClick={()=>filterByCategory("Horror")} className="btn btn-outline-warning mx-3">Horror</button>
            <button type="button" onClick={()=>filterByCategory("Drama")} className="btn btn-outline-info mx-3">Drama</button>
            <button type="button" onClick={()=>filterByCategory("Sci-Fi")} className="btn btn-outline-light mx-3">Web-Series</button>
        </div>
        <div className='d-flex flex-wrap justify-content-center align-items-center gap-4 text-center mx-auto' style={{width:'1200px'}}>
            {movieList.map((data)=>(
            <div key={data} style={{maxWidth:'250px'}}>
                <div className='p-4 d-flex flex-wrap justify-content-center align-items-center hoverEffact'>
                    <img src={data.poster_path} alt='' style={{width:'200px'}} className='border border-warning border-2 rounded-5'/>
                </div>
                <h5>{data.title}</h5>
                <p>{data.release_date}</p>
            </div>
        ))}
        </div>
    </>
  )
}
export default MoviesZone