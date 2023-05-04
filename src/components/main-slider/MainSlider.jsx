import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import './main-slider.scss'
import tmdbApi, { movieType } from '../../api/tmbdApi'
import MainSliderItem from './MainSliderItem'
import Modal, { ModalContent } from '../modal/Modal'

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
      {movieItem.map((item, i) => {
        return <TrilerModal key={i} item={item} />
      })}
    </div>
  )
}

const TrilerModal = (props) => {
  const item = props.item
  const iframeRef = useRef(null)

  const onClose = () => {
    return iframeRef.current.setAttribute('src', '')
  }

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  )
}

export default MainSlider
