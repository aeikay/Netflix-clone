import React, { useState, useEffect } from 'react'
import './Rowpost.css'
import { img_url } from '../../constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function Rowpost({ title, url, isSmall }) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const [movie, setmovie] = useState()
  useEffect(() => {
    axios.get(url).then((response) => {
      setmovie(response.data.results)
    })
  })

  const [video, setvideo] = useState()

  const trailer = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9924c9df8e646f8a8e1ce0576980c0d4&language=en-US`
      )
      .then((res) => {
        if (res.data.results.length !== 0) {
          setvideo(res.data.results[0].key)
        }
      })
  }
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
        {movie
          ? movie.map((mv) => {
              return (
                <img
                  onClick={() => trailer(mv.id)}
                  className={isSmall ? 'small_poster' : 'poster'}
                  src={img_url + mv.backdrop_path}
                  alt=''
                />
              )
            })
          : null}
      </div>
      {video && <YouTube videoId={video} opts={opts} />}
    </div>
  )
}

export default Rowpost
