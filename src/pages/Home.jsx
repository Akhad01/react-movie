import React from 'react'

import MainSlider from '../components/main-slider/MainSlider'
import MovieList from '../components/movie-list/MovieList'

import { category, movieType, tvType } from '../api/tmbdApi'

const Home = () => {
  return (
    <>
      <MainSlider />
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h3>Popular Movies</h3>
        </div>

        <MovieList category={category.movie} type={movieType.popular} />
      </div>
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h3>Top Rated Movies</h3>
        </div>
        <MovieList category={category.movie} type={movieType.top_rated} />
      </div>
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h3>Popular TV</h3>
        </div>

        <MovieList category={category.tv} type={tvType.popular} />
      </div>
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h3>On the air TV</h3>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </div>
    </>
  )
}

export default Home
