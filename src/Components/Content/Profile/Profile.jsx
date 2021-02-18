import React from 'react'
import imgProfile from './../../../img/realistic-star-wars-background-For-Full-Resolution-Wallpaper.jpg'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";
import PostContainer from './PostContainer';


const Profile = (props) => {

        return (
            <div>
                <div className={classes.back}>
                    <img src={imgProfile} />
                    <span>Learn JavaScript. . .</span>
                </div>
                <ProfileInfo {...props} />
                <PostContainer/>
            </div>
        )
    }


export default Profile