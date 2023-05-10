import React, { useEffect, useRef, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'

import './modal.scss'

const Modal = (props) => {
  const [active, setActive] = useState()

  useEffect(() => {
    setActive(props.active)
  }, [props.active])

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  )
}

const ModalContent = (props) => {
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

const TrailerModal = (props) => {
  const item = props.item
  const iframeRef = useRef(null)

  const onClose = () => {
    return iframeRef.current.setAttribute('src', '')
  }

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="380px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  )
}

export default TrailerModal
