import React from 'react'

import './catalog-head.scss'

const CatalogHead = (props) => {
  return (
    <div className="catalog-head">
      <h2>{props.children}</h2>
    </div>
  )
}

export default CatalogHead
