import React from 'react'
import { useParams } from 'react-router-dom'

import { category as cate } from '../api/tmbdApi'

import CatalogHead from '../components/catalog-head/CatalogHead'
import MovieCatalog from '../components/MovieCatalog/MovieCatalog'

const Catalog = () => {
  const { category } = useParams()

  return (
    <>
      <CatalogHead>
        {category === cate.movie ? 'Movie' : 'TV Series'}
      </CatalogHead>
      <div className="container">
        <div className="section mb-3">
          <MovieCatalog category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalog
