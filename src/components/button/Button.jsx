import React from 'react'
import './button.scss'

const Button = (props) => {
  console.log('prop', props)
  return (
    <button
      className="btn"
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

// const OutlineButton = (props) => {

// }

export default Button
