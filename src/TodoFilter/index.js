import React from 'react'

export function TodoFilter({setRenderAllTodos, renderAllTodos, setRenderActiveTodos, renderActiveTodos, setRenderCompletedTodos, renderCompletedTodos,  leftTodos, deletedCompletedTodos}){


    const active = () =>{
        setRenderActiveTodos(true) 
        setRenderAllTodos(false)  
        setRenderCompletedTodos(false)
    }

    const completed = () =>{
        setRenderActiveTodos(false) 
        setRenderAllTodos(false)  
        setRenderCompletedTodos(true)
    }

    const all = () =>{
        setRenderActiveTodos(false) 
        setRenderAllTodos(true)  
        setRenderCompletedTodos(false)
    }

    return(
        <div className='todo-filter-control '>
            <div className='todo-count'>
                <span>{leftTodos}</span>
                <p>items left</p>
            </div>

            <div className='control-btn'>
                <button
                onClick={()=> all()}
                className={`${renderAllTodos ? 'active' : ''}`}
                > 
                    All 
                </button>
            
                <button
                onClick={() => active()}
                className={`${renderActiveTodos ? 'active' : ''}`} 
                >
                    Active
                </button>


                <button
                onClick={() => completed()}
                className={`${renderCompletedTodos ? 'active' : 'd'}`} 
                >
                    Completed
                </button>
            </div>


            <div> 
                <span 
                className='clear-completed-btn' 
                onClick={() => deletedCompletedTodos()}
                >
                    Clear Completed
                </span>
            </div>
        </div>
    )
}