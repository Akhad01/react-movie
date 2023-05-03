import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import './main-slider.scss'
import tmdbApi, { movieType } from '../../api/tmbdApi'
import MainSliderItem from './MainSliderItem'

const MainSlider = () => {
  const [movieItem, setMovieItem] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        })
        setMovieItem(response.data.results.slice(0, 7))
      } catch {
        console.log('Error')
      }
    }
    getMovies()
  }, [])

  console.log('movieItem', movieItem)

  return (
    <div className="main-slider">
      <Swiper slidesPerView={1} spaceBetween={0}>
        {movieItem.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              {({ isActive }) => {
                return (
                  <MainSliderItem
                    className={`${isActive ? 'active' : ''}`}
                    item={item}
                  />
                )
              }}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default MainSlider
