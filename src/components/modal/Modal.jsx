import React, { useEffect, useRef, useState } from 'react'

import { RiCloseFill } from 'react-icons/ri'

import './modal.scss'

const Modal = (props) => {
  const [active, setActive] = useState()

  useEffect(() => {
    setActive(props.active)
  }, [props.active])

  console.log('active', active)

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  )
}

export const ModalContent = (props) => {
  const contentRef = useRef(null)

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove('active')

    if (props.onClose) props.onClose()
  }

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <RiCloseFill />
      </div>
    </div>
  )
}

export default Modal
