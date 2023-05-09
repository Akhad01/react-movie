import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../api/tmbdApi'
import apiConfig from '../../api/apiConfig'

const CastList = (props) => {
  const { category } = useParams()

  console.log('category', category)

  const [casts, setCasts] = useState([])

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id)

      console.log('res', res)

      setCasts(res.data.cast.slice(0, 5))
    }

    getCredits()
  }, [category, props.id])

  console.log('casts', casts)

  return (
    <div className="casts">
      {casts.map((item, i) => (
        <div className="casts__item" key={i}>
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
        </div>
      ))}
    </div>
  )
}

export default CastList
