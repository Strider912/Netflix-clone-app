import React, { useEffect, useState } from 'react'
import  './Banner.css'
import axios from './Axios'
import requests from './Request'

const Banner = () => {

    const [movie, setmovie] = useState([])
    const truncate=(string, n)=>{
        return string?.length > n ?  string.substr(0,n-1)  + "..." : string
    }
    useEffect(() => {

            async function fetchdata(){
                const request = await axios.get(requests.fetchNetflixOriginals)
                setmovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1 )
                ])
                console.log(movie)
            }
            fetchdata()
    }, [])

    return (

        <header className="banner" style={{
            backgroundImage : `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
        }} >
            <div className="banner__contents">
            <h1 className="banner__title">{ movie?.name || movie?.title || movie?.original_name  }</h1>
            <div className="banner_buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">Movie</button>
            </div>
            <h1 className="banner__desc"> { truncate( movie?.overview,150)  } </h1>
            </div>

            <div className="banner__fade" />

        </header>

    )
}

export default Banner


