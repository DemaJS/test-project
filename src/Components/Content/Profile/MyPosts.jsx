import classes from "./Profile.module.css";
import React from "react";
import Post from "../Post/Post";
import {Field, reduxForm, reset} from "redux-form";

const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter text' component='textarea' name='post'/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const resetForm = (formValues, dispatch) => {
    dispatch(reset("post"))
}

const PostReduxForm = reduxForm({form:'post',onSubmitSuccess: resetForm})(PostForm)

const MyPosts = (props) => {

    let postDataElements = props.postData.map(post => <Post message = {post.message} like = {post.like}/>)

    let addPost = (postForm) => {
        props.addPost(postForm.post)
    }


    return (
        <div>
            <div className={classes.posts}>
                <p>My Post</p>
                <PostReduxForm onSubmit = {addPost}/>
            </div>
            <div className={classes.post}>
                {postDataElements}
            </div>
        </div>
    )
}

export default MyPosts