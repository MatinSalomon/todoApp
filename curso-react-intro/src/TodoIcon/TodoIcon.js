import React from "react"
import './TodoIcon.css'
import { FaCheck as CheckSvg }  from "react-icons/fa";
import { IoCloseSharp as DeleteIcon} from "react-icons/io5";

const iconTypes = {
    "check":(color) => <CheckSvg className="Icon-svg" fill={color}/>,
    "delete":(color) => <DeleteIcon className="Icon-svg" fill={color}/>
}
export function TodoIcon({type, color, onClick}) {
    return(
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}

        </span>

    )
}