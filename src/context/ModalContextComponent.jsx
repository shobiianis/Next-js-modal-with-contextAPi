import React, { createContext, useState } from 'react'

export const ModalContext=createContext('')


const ModalContextComponent = (prop) => {
  
    const [showModal,setShowModal]=useState(false)
    const [display,setDisplay]=useState('')

    const closeModal=()=>setShowModal(false)
    const openModal=()=>setShowModal(true)  
    return (
        <ModalContext.Provider value={{showModal,closeModal,openModal,display,setDisplay}}>
            {prop.children}
        </ModalContext.Provider>   
    )
}

export default ModalContextComponent