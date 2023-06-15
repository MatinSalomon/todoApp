import React from "react"
import './TodoForm.css'
import { TodoContext } from "../TodoContext"
export function TodoForm() {
    const {setOpenModal, addTodo} = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (e) => {
        e.preventDefault()
        setOpenModal(false)
    }

    const onChange = (e) => {
        e.preventDefault()
        setNewTodoValue(e.target.value)
    }    
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo todo</label>
            <textarea
                placeholder="Ir al gimnasio"
                value={newTodoValue}
                onChange={onChange}
            />

            <div className="TodoForm-buttonContainer">
                <button 
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}
                >cancelar</button>

                
                <button 
                className="TodoForm-button TodoForm-button--add"
                type="submit"
                
                >add</button>
            </div>
        </form>

    )
}