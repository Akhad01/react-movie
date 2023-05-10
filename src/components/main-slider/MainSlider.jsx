import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import tmdbApi, { movieType } from '../../api/tmbdApi'

import { Pagination } from 'swiper'

import MainSliderItem from './MainSliderItem'
import TrailerModal from '../modal/Modal'

import 'swiper/css'
import 'swiper/css/pagination'

import './main-slider.scss'

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

  return (
    <div className="main-slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination
        modules={[Pagination]}
      >
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
      {movieItem.map((item, i) => {
        return <TrailerModal key={i} item={item} />
      })}
    </div>
  )
}

export default MainSlider
