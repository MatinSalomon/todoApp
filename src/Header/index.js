import React from "react"

export function Header({handleDarkMode, darkMode}) {

    

    
    return(
        <div className="header">
            <h1>TODO</h1>
            <span 
            onClick={() => handleDarkMode()}
            >
                <img className='mode-icon' src={`${darkMode ? 'https://i.imgur.com/hKMcOOV.png' : 'https://i.imgur.com/iiR6AN3.png'}`} alt="" />
                
            </span>
           
        </div>
    )

  }