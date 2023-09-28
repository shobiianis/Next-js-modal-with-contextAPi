import React, { createContext, useState } from 'react'

export const ModalContext=createContext('')


const ModalContextComponent = (prop) => {
  
    const [showModal,setShowModal]=useState(false)

    const closeModal=()=>setShowModal(false)
    const openModal=()=>setShowModal(true)  
    return (
        <ModalContext.Provider value={{showModal,closeModal,openModal}}>
            {prop.children}
        </ModalContext.Provider>   
    )
}

export default ModalContextComponent