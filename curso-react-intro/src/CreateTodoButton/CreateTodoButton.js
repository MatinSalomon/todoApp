import { TodoContext } from '../TodoContext'
import './CreateTodoButton.css'
import React from "react"

export function CreateTodoButton(){
   const {setOpenModal, openModal}= React.useContext(TodoContext)

    return(
            <button
            className='CreateTodoButton'
            onClick={() => {setOpenModal(!openModal)}}
            >+

            </button>
    )
}