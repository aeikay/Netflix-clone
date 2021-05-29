import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from '../../axios'
import { api_key, img_url } from '../../constants/constants'

function Banner() {
  const [movie, setmovie] = useState()

  //using backtick
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${api_key}&language=en-US`)
      .then((res) => {
        setmovie(res.data.results[0])
        console.log(res.data.results[0])
      })
  }, [])
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? img_url + movie.backdrop_path : ''})`,
      }}
      className='banner'
    >
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : null}</h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>Mylist</button>
        </div>

        <h1 className='description'>{movie ? movie.overview : null}</h1>
      </div>
      <div className='fade-bottom'></div>
    </div>
  )
}

export default Banner
