import React from 'react'
import classes from './Post.module.css'
import avaPost from './../../../img/clipart4165998.png'
import like from './../../../img/like.png'

const Post = (props) => {
    return (
        <div className={classes.top}>
            <td>
                <div className={classes.item}>
                    <img src={avaPost} />

                </div>
            </td>
            <td className={classes.post}>
                <div>
                    {props.message}
                    <span><img src={like}/>{props.like}</span>
                </div>
            </td>
        </div>

    )
}

export default Post