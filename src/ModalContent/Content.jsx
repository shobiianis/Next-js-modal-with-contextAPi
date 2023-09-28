import { ModalContext } from '@/context/ModalContextComponent'
import React, { useContext } from 'react'

const Content = () => {
    const {closeModal,display}=useContext(ModalContext)
    return (
        <div className='bg-black/20 inset-0 w-full h-full fixed flex items-center'>
            <div className='bg-white w-3/5 sm:w-1/5 h-40 m-auto  border-none rounded-lg ' >
            <div className=' flex justify-end mt-1'>
                <div className=' w-6 text-center hover:cursor-pointer mr-1 text-lg' onClick={closeModal} >x</div>
            </div>
            <div className='pt-10 text-center'>{display}</div>
            </div>
        </div>
       
        )
}

export default Content