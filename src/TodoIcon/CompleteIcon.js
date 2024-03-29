import React from "react"

export function CompleteIcon({completed , onCompleted}) {
    return(

        <span 
            className={`checkbox ${completed ? 'completed' : ''}`}
            type={'check'}
            onClick={onCompleted}
        >
           {completed ? <img src="https://i.imgur.com/3nz27pG.png" alt="checkmark" /> : ''}

      </span>

       
    )
}