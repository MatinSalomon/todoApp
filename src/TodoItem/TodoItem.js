import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import React from "react"
import './TodoItem.css'

export function TodoItem({text, completed, onCompleted, onDelete, darkMode}) {

  return(
    <li className='TodoItem'>

    

      <CompleteIcon 
        completed={completed}
        onCompleted={onCompleted}  
      /> 

      <p className={`TodoItem-p ${completed ? 'TodoItem-p--complete' : '' }  ${darkMode ? 'TodoItem-p--dark' : 'TodoItem-p--lightMode'}`}>{text}</p>
      
      <DeleteIcon 
        onDelete={onDelete}
      />

    </li>
    );
  }