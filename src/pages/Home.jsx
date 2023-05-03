import React, { useEffect, useState } from 'react'
import Movie from '../components/Movie'
import MainSlider from '../components/main-slider/MainSlider'

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=408ab944b09d11482953df9609d7b95c&page=1'
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=408ab944b09d11482953df9609d7b95c&query='

const Home = () => {
  const [movies, setMovies] = useState([])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setMovies(data.results)
      })
  }

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])

  return (
    <>
      <MainSlider />
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  )
}

export default Home
