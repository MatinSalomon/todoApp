import { TodoContext } from "../TodoContext"
import React from "react"

export function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const updateSearchValue= (e) =>{
        setSearchValue(e.target.value)
    }

    return(
        <div className="div--TodoSearch">
            <input 
            placeholder="cortar cebolla" 
            value={searchValue}
            onChange={updateSearchValue}
            />
        </div>
    )
}