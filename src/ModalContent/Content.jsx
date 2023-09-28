import { ModalContext } from '@/context/ModalContextComponent'
import React, { useContext } from 'react'

const Content = () => {
    const {closeModal}=useContext(ModalContext)
    return (
    <div className=' border-4 w-1/2 text-center border-blue-800'>
        <div>Heyyya im a modal</div>
        <button onClick={()=>closeModal()} >Close</button>
    </div>
  )
}

export default Content