import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem'; 
import {TodoSearch} from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton.js';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoError } from '../TodoError/TodoError'
import { EmpetyTodo } from '../EmpetyTodo/EmpetyTodo'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';



export function AppUI(){
  const {
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
} = React.useContext(TodoContext)


    return (
        <> 
          <TodoCounter />
    
          <TodoSearch 
          />
    
          
              <TodoList>

              {loading && <TodoLoading />}
              {error && <TodoError />}
              {(!loading && searchedTodos == 0) && <EmpetyTodo />}

              {searchedTodos.map(todo => (
                <TodoItem 
                  text={todo.text}
                  key={todo.text}
                  completed={todo.completed}
                  onCompleted={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}

            </TodoList>
    
         <CreateTodoButton /> 


         {openModal && (
         <Modal>
            <TodoForm />
         </Modal>
         )}
        </>
      );
}