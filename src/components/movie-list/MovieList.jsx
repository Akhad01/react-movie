import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import tmdbApi, { category } from '../../api/tmbdApi'

import MovieCard from '../movie-card/MovieCard'

import './movie-list.scss'

const MovieList = (props) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getList = async () => {
      let response = null
      const params = {}

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params })
            break

          default:
            response = await tmdbApi.getTvList(props.type, { params })
            break
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id)
      }

      setItems(response.data.results)
    }

    getList()
  }, [props.category, props.id, props.type])

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView="auto">
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard category={props.category} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList
