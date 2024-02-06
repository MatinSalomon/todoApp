import React from 'react'

export function TodoFilterMobile({setRenderAllTodos, renderAllTodos, setRenderActiveTodos, renderActiveTodos, setRenderCompletedTodos, renderCompletedTodos,}){


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
            <div className='control-btn-mobile'>
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
    )
}