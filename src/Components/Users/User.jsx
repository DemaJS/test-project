import React from "react";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../img/klipartz.com (5).png";


const User = (props) => {

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.flex}>
                    <div className={classes.ava}>
                        <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.large != null ? props.user.photos.large : userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={classes.text}>
                        {props.user.name}<br/>
                        {props.user.status}<br/>
                        {props.user.uniqueUrlName}
                    </div>
                </div>
                <div>
                    {
                        props.user.followed
                            ?
                            <button
                                disabled={props.followingInProgress.some(id => id === props.user.id)}
                                onClick={() => {
                                    props.unfollowThunk(props.user.id)
                                }
                                }>Unfollow</button>
                            :
                            <button
                                disabled={props.followingInProgress.some(id => id === props.user.id)}
                                onClick={() => {
                                    props.followThunk(props.user.id)

                                }
                                }>Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default User