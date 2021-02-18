import React from 'react'
import {addPostCreator} from "../../../Reducers/ProfileReducer";
import {connect} from "react-redux";
import MyPosts from './MyPosts'



let mapStateToProps = (state) => {
    return {
        postData:state.profilePage.postData,
        fluxValuePost:state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost:(postForm) => {
            dispatch(addPostCreator(postForm))
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default PostContainer
