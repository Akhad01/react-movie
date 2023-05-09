import React, { useCallback, useEffect, useState } from 'react'

import './search.scss'
import { useNavigate } from 'react-router-dom'

const Search = (props) => {
  const navigate = useNavigate()

  const [query, setQuery] = useState(props.query ? props.query : '')

  const goToSearch = useCallback(() => {
    if (query.trim().length > 0) {
      navigate(`/${props.category}/search/${query}`)
    }
  }, [query, navigate, props])

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault()
      if (e.keyCode === 13) {
        goToSearch()
      }
    }

    document.addEventListener('keyup', enterEvent)

    return () => document.removeEventListener('keyup', enterEvent)
  }, [goToSearch, query])

  return (
    <input
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      className="input"
      type="text"
      placeholder="Search"
    />
  )
}

export default Search
