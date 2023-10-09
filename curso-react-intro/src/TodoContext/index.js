import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext()


export function TodoProvider({children}){
    const {
        item: todos,
        saveItem: saveTodos,
        loading, 
        error,
      } = useLocalStorage('TODOS_V1', [])
       
      const [searchValue  , setSearchValue] = React.useState('')
      const [openModal  , setOpenModal] = React.useState(false)


      const completedTodos = todos.filter( todo => !!todo.completed).length
      const totalTodos = todos.length;  
    
      const searchedTodos = todos.filter ( (todo) => { 
        const todoTextLoweCase = todo.text.toLowerCase()
        const searchValueLowerCase = searchValue.toLowerCase()
    
        return todoTextLoweCase.includes(searchValueLowerCase) 
      })  
    
    
      const completeTodo = (text) => {
        const newArrayTodos = [...todos]
        const todoIndex = newArrayTodos.findIndex((todo) => todo.text === text)
        newArrayTodos[todoIndex].completed = !newArrayTodos[todoIndex].completed
        saveTodos(newArrayTodos)
      }
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const addTodo = (value) => {
        const newArrayTodos = [...todos]
        newArrayTodos.push({
          text: value,
          completed: false
        })
        saveTodos(newArrayTodos)
      }

      return(
        <TodoContext.Provider value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
          addTodo,
            }}>
            {children}
        </TodoContext.Provider>
      )
}