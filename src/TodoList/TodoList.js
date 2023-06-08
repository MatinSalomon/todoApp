import './TodoList.css'
import React from "react"

export function TodoList({children}) {
    return(
        <ul className='TodoList'>
            {children}
        </ul>
    )
}