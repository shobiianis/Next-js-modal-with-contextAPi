import Content from '@/ModalContent/Content'
import React from 'react'
import ReactDOM from 'react-dom'

const Portal = () => {
  return (
    ReactDOM.createPortal( <Content/> ,document.getElementById('root-modal') )
     )
}

export default Portal