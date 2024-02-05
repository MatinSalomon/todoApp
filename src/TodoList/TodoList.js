import React from "react"

export function TodoList({children, darkMode} ) {
    return(
        <ul className={`TodoList ${darkMode ? 'Todo-List-dark' : 'Todo-List-light'}`}>
            {children}
        </ul>
    )
}