import React from 'react'
import Button from '../button/Button'
import apiConfig from '../../api/apiConfig'

const MainSliderItem = (props) => {
  const item = props.item

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  )

  const setModalActive = () => {
    console.log('active')
  }

  console.log('item', item)
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
            <Button onClick={setModalActive}>Watch now</Button>
          </div>
        </div>
        <div className="main-slider__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainSliderItem
