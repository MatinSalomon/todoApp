import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext()




export function TodoProvider({children}){
    const {
        item: todos,
        saveItem: saveTodos,
      } = useLocalStorage('TODOS_V1', [])
       

      const [searchValue  , setSearchValue] = React.useState('')

      const [renderAllTodos  , setRenderAllTodos] = React.useState(true)
      const [renderActiveTodos  , setRenderActiveTodos] = React.useState(false)
      const [renderCompletedTodos  , setRenderCompletedTodos] = React.useState(false)


      const completedTodos = todos.filter( todo => !!todo.completed)
      const activeTodos = todos.filter( todo => !todo.completed)
      const allTodos = todos 

      const leftTodos = todos.filter(todo => !todo.completed).length;  
    
    
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

      const deletedCompletedTodos = () => {
        const newArrayTodos = [...todos]
        const deletedCompletedTodos = newArrayTodos.filter(todo => todo.completed === false)
        saveTodos(deletedCompletedTodos)
      }


      
    const [darkMode, setDarkMode] = React.useState('false')

      return(
        <TodoContext.Provider value={{
          renderAllTodos,
          setRenderAllTodos,
          renderActiveTodos,
          setRenderActiveTodos,
          renderCompletedTodos,
          setRenderCompletedTodos,
          allTodos,
          completedTodos,
          leftTodos,
          activeTodos,
          searchValue,
          setSearchValue,
          completeTodo,
          deleteTodo,
          addTodo,
          darkMode,
          setDarkMode,
          deletedCompletedTodos,

            }}>
            {children}
        </TodoContext.Provider>
      )
}