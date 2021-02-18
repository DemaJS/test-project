import classes from "./Profile.module.css";
import React from "react";
import userPhoto from "../../../img/klipartz.com (5).png";
import Status from "./ProfileStatus";
import StatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {

    return (
        <div>
            <div className={classes.border}>
            <td>
                <div className={classes.ava}>
                    <img src={props.profile && props.profile.photos && props.profile.photos.large !== null
                    ? props.profile.photos.large : userPhoto}/>
                </div>
            </td>
            <td className={classes.description}>
                <div>
                    {props.profile.aboutMe}<br/>
                    {props.profile.fullName}<br/>
                    {props.profile.lookingForAJobDescription}
                    <StatusHooks {...props} />
                </div>
            </td>
            </div>
        </div>
    )
}


export default ProfileInfo