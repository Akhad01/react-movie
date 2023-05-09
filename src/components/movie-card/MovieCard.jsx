import React from 'react'
import { Link } from 'react-router-dom'
import { category } from '../../api/tmbdApi'
import apiConfig from '../../api/apiConfig'

import './movie-card.scss'

const MovieCard = (props) => {
  const item = props.item

  const link = '/' + category[props.category] + '/' + item.id

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)

  return (
    <Link to={link}>
      <div className="movie-card">
        <div className="movie-header">
          <img src={bg} alt="" />
        </div>
        <div className="movie-content">
          <div className="movie-content-header">
            <h3 className="movie-title">{item.title || item.name}</h3>
          </div>
          <div className="movie-info">
            <div className="info-section">
              <label>Date & Time</label>
              <span>
                {item.release_date ? item.release_date : item.first_air_date}
              </span>
            </div>
            <div className="info-section">
              <label>rating</label>
              <span>{item.vote_average}/10</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
