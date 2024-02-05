import { Header } from '../Header/index.js';
import { TodoItem } from '../TodoItem/TodoItem.js'; 
import { TodoList } from '../TodoList/TodoList.js';
import { TodoLoading } from '../TodoLoading/TodoLoading.js';
import { TodoError } from '../TodoError/TodoError.js'
import { TodoContext } from '../TodoContext/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { TodoFilter } from '../TodoFilter/index.js';
import './style.css'
import React from 'react';



export function AppUI(){


  const {
    // loading,
    // error,
    // renderTodos, 
    renderAllTodos,
    setRenderAllTodos,
    renderActiveTodos,
    setRenderActiveTodos,
    renderCompletedTodos,
    setRenderCompletedTodos,
    allTodos,
    activeTodos,
    completedTodos,
    leftTodos,
    completeTodo,
    deleteTodo,
    darkMode,
    setDarkMode,
    deletedCompletedTodos,
    
} = React.useContext(TodoContext)




const handleDarkMode = () => {
  setDarkMode(!darkMode)
}



    return (
        <div className={ `wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}> 

        <div className="container">
              <Header 
                handleDarkMode={handleDarkMode}
                darkMode={darkMode}
              />
              <TodoForm 
                darkMode={darkMode}
              />



              <TodoList
              darkMode={darkMode}
              >



                 {renderAllTodos && 
                    allTodos.map(todo => (
                      <TodoItem 
                        text={todo.text}
                        key={todo.text}
                        completed={todo.completed}
                        onCompleted={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        darkMode={darkMode}
                      />  
                  ))}

                {renderActiveTodos && 
                    activeTodos.map(todo => (
                      <TodoItem 
                        text={todo.text}
                        key={todo.text}
                        completed={todo.completed}
                        onCompleted={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        darkMode={darkMode}
                      />  
                  ))}

                  {renderCompletedTodos && 
                    completedTodos.map(todo => (
                      <TodoItem 
                        text={todo.text}
                        key={todo.text}
                        completed={todo.completed}
                        onCompleted={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        darkMode={darkMode}
                      />  
                  ))}
                  
                  
                  
                  <TodoFilter
                  renderAllTodos={renderAllTodos}
                  renderActiveTodos={renderActiveTodos}
                  renderCompletedTodos={renderCompletedTodos}
                  completedTodos={completedTodos}
                  setRenderAllTodos={setRenderAllTodos}
                  setRenderActiveTodos={setRenderActiveTodos}
                  setRenderCompletedTodos={setRenderCompletedTodos}
                  leftTodos={leftTodos}
                  deletedCompletedTodos={deletedCompletedTodos}
                  />
              </TodoList>
            </div>
          </div>
  
      );
}