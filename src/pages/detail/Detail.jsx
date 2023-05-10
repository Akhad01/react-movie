import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import tmdbApi from '../../api/tmbdApi'
import apiConfig from '../../api/apiConfig'

import CastList from './CastList'
import MovieList from '../../components/movie-list/MovieList'
import ButtonVideo from '../../components/button/Button'
import TrailerModal from '../../components/modal/Modal'

import './detail.scss'

const Details = () => {
  const { category, id } = useParams()

  const [item, setItem] = useState()

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} })

      setItem(response.data)
    }

    getDetail()
  }, [category, id])

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`)

    const videos = await tmdbApi.getVideos(category, id)

    if (videos.data.results.length > 0) {
      const videSrc =
        'https://www.youtube.com/embed/' + videos.data.results[0].key

      modal
        .querySelector('.modal__content > iframe')
        .setAttribute('src', videSrc)
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No trailer'
    }

    modal.classList.toggle('active')
  }

  return (
    <>
      {item && (
        <>
          <div
            className="baner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="movie-detail container">
            <div className="movie-detail__poster">
              <div
                className="movie-detail__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-detail__info">
              <h1 className="title">{item.title || item.name}</h1>
              <ul className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <li className="genres__item" key={i}>
                      {genre.name}
                    </li>
                  ))}
              </ul>
              <p className="description">{item.overview}</p>
              <ButtonVideo onClick={setModalActive}>Watch now</ButtonVideo>
              <TrailerModal item={item} />
              <div className="cast">
                <h2>Casts</h2>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="section similar container">
            <div className="mb-3">
              <h2>Similar</h2>
            </div>
            <MovieList category={category} type="similar" id={item.id} />
          </div>
        </>
      )}
    </>
  )
}

export default Details
