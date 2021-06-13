import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './Axios'

const url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, isLargeRow, fetchUrl }) => {

    const [ movie , setmovie  ]  = useState([])
    useEffect(() => {

        async function fetchdata(){
            const request = await axios.get(fetchUrl)
            setmovie(request.data.results)
        }
        fetchdata()
    }, [])

    return (

        <div className="row__container">
        <div className="row">
            <h2> {title} </h2>
            <div className="row__posters">
                {movie?.map((movie)=>(
                    <img key={movie.id}
                    className={`row__poster ${isLargeRow && 'islargeposter' } `}
                    src={`${url}${ isLargeRow ? movie?.poster_path : movie?.backdrop_path }`}
                     alt="" />
                ))}
                </div>
        </div>
        </div>
    )
}

export default Row


