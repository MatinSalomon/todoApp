import { TodoContext } from "../TodoContext"
import "./TodoCounter.css"
import React from "react"

export function TodoCounter() {
  const {completedTodos, totalTodos,} = React.useContext(TodoContext)

    return(

      totalTodos === completedTodos
      ?
      
      <h1>Good job have completed all todos</h1>

      :

      <h1> Has completado {completedTodos} de {totalTodos} todos </h1>
    )
  }