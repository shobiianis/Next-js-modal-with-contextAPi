
import { ModalContext } from '@/context/ModalContextComponent'
import React, { useContext } from 'react'
import Portal from '../Portal/Portal'


const index = () => {
  
  const {openModal,showModal}=useContext(ModalContext)
  
  return (
    <div>
      <h1>hello world</h1>
      <button onClick={()=>openModal()}>Show Modal</button>
     {showModal && <Portal/>  } 
    </div>
  )
}

export default index