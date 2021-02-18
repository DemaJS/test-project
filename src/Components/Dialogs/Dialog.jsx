import React from 'react'
import classes from './Dialogs.module.css'
import fr1 from "../../img/clipart4165998.png";

const Dialog = (props) => {
    return (
        <div className={classes.dialog}><img src={fr1}/><span>{props.name}</span></div>
    )
}

export default Dialog