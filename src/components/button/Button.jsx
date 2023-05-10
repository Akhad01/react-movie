import React from 'react'

import { IoPlay } from 'react-icons/io5'
import { BiMoviePlay } from 'react-icons/bi'

import './button.scss'

const ButtonVideo = (props) => {
  return (
    <button
      className="btn-video"
      onClick={
        props.onClick
          ? () => {
              props.onClick()
            }
          : null
      }
    >
      <IoPlay size={'16px'} />
      {props.children}
    </button>
  )
}

export const ButtonDetail = (props) => {
  return (
    <button
      className="btn-detail"
      onClick={
        props.onClick
          ? () => {
              props.onClick()
            }
          : null
      }
    >
      <BiMoviePlay fontSize={'16px'} /> {props.children}
    </button>
  )
}

export default ButtonVideo
