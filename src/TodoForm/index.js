import React from "react"
import { TodoContext } from "../TodoContext"
export function TodoForm({darkMode}) {
    const { addTodo} = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

 const handleChange = (e) => {
    setNewTodoValue(e.target.value);
  };

    const createTodo = (e) => { 
        e.preventDefault()
        addTodo(newTodoValue)
    }


    const keyDownEnter = (e) => {
        if (e.keyCode === 13) {
        createTodo(e)
    }
}

    return(
        <form className={`form-control ${darkMode ? 'form-control-dark' : 'form-control-light'}`}>
            <span className="checkbox"></span>
            <input
                className={`input ${darkMode ? 'input-dark' : 'input-light'}`}
                placeholder="Ir al gimnasio"
                onChange={handleChange}
                onKeyDown={keyDownEnter}
            />
        </form>
    )
}