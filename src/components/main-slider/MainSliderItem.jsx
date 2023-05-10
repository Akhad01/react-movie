import React from 'react'

import { ButtonDetail } from '../button/Button'

import apiConfig from '../../api/apiConfig'
import tmdbApi, { category } from '../../api/tmbdApi'
import ButtonVideo from '../button/Button'
import { useNavigate } from 'react-router-dom'

const MainSliderItem = (props) => {
  const navigator = useNavigate()

  const item = props.item

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  )

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`)

    const videos = await tmdbApi.getVideos(category.movie, item.id)

    if (videos.data.results.length > 0) {
      const videoSrc =
        'https://www.youtube.com/embed/' + videos.data.results[0].key

      modal
        .querySelector('.modal__content > iframe')
        .setAttribute('src', videoSrc)
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No trailer'
    }

    modal.classList.toggle('active')
  }

  return (
    <div
      className="main-slider__item"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="main-slider__item__content container">
        <div className="main-slider__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <ButtonVideo onClick={setModalActive}>Watch Video</ButtonVideo>
            <ButtonDetail onClick={() => navigator('./movie/' + item.id)}>
              Watch Now
            </ButtonDetail>
          </div>
        </div>
        <div className="main-slider__item__content__poster">
          <img
            src={apiConfig.w500Image(item.poster_path || item.backdrop_path)}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default MainSliderItem
