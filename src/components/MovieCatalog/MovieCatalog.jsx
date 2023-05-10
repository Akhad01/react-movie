import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import tmdbApi, { category, movieType, tvType } from '../../api/tmbdApi'

import Search from '../Search/Search'
import MovieCard from '../movie-card/MovieCard'

import './movie-catalog.scss'

const MovieCatalog = (props) => {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalPage, setTotalPage] = useState(0)

  const { query } = useParams()

  useEffect(() => {
    const scrollHandler = (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        items.length < totalPage
      ) {
        setFetching(true)
      }
    }

    document.addEventListener('scroll', scrollHandler)

    return () => document.removeEventListener('scroll', scrollHandler)
  }, [items.length, totalPage])

  useEffect(() => {
    loadMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

  const loadMore = async () => {
    let response = null

    if (fetching) {
      if (query === undefined) {
        const params = {
          page: currentPage + 1,
        }
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            })

            break
          default:
            response = await tmdbApi.getTvList(tvType.popular, {
              params,
            })
        }
      } else {
        const params = {
          query: query,
          page: currentPage + 1,
        }

        response = await tmdbApi.search(props.category, { params })
      }

      setItems([...items, ...response.data.results])
      setCurrentPage(currentPage + 1)

      setFetching(false)
    }
  }

  useEffect(() => {
    const getList = async () => {
      let response = null

      if (query === undefined) {
        const params = {}

        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            })
            break

          default:
            response = await tmdbApi.getTvList(tvType.popular, { params })
        }
      } else {
        const params = {
          query,
        }

        response = await tmdbApi.search(props.category, { params })
      }

      setItems(response.data.results)
      setTotalPage(response.data.total_results)
    }

    getList()
  }, [props.category, query])

  return (
    <>
      <div className="search mb-3">
        <Search category={props.category} query={query} />
      </div>

      <div className="movie-catalog">
        {items.map((item, i) => {
          return <MovieCard category={props.category} item={item} key={i} />
        })}
      </div>
    </>
  )
}

export default MovieCatalog
