import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <div className={classes.header}>
            Header
            <div className={classes.logout}>
                {props.isAuth ? props.login
                : <NavLink to='/login'>Login</NavLink>}<span> </span>
                <button onClick={props.logoutThunk}>Logout</button>
            </div>

        </div>
    )
}

export default Header