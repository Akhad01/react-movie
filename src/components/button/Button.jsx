import React from 'react'
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
      {props.children}
    </button>
  )
}

export default ButtonVideo
