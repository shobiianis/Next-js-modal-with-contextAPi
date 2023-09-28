
import { ModalContext } from '@/context/ModalContextComponent'
import React, { useContext } from 'react'
import Portal from '../Portal/Portal'


const index = () => {
  
  const {openModal,showModal,display,setDisplay}=useContext(ModalContext)
  
  return (
     <div>
      <h1 className='text-center mt-10' > Click On Modal</h1>
    <div className='flex gap-10 justify-center mt-60 '>
      
      <button onClick={()=>{
        setDisplay("hello Im a modal-one  ")
        openModal()
        }}>Modal-one</button>
        <br />
        <button onClick={()=>{
                setDisplay("hello Im a modal-two")
                openModal() 
                }}>Modal-two</button>

     {showModal && <Portal display={display} />  } 
    </div>
    </div>
  )
}

export default index