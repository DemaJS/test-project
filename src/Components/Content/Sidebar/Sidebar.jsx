import React from 'react'
import classes from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import fr1 from './../../../img/clipart4165998.png'

let Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>My Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to = '/examples' activeClassName={classes.active}>Examples</NavLink>
            </div>
            <div className={classes.bottom}>
                <a>Friends</a>
                <p> <img src={fr1}/> <img src={fr1}/> <img src={fr1}/> </p>
            </div>

        </div>
    )
}
export default Sidebar