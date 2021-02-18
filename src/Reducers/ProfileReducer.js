import {profileAPI} from "../DAL/appAPI";

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    postData: [
        {id: 1, message: "Hi Fi Baich!", like: 5},
        {id: 2, message: "Kavabanga!", like: 5},
        {id: 3, message: "Yo Yo!", like: 5}
    ],
    profile:{},
    status:''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postFormData,
                like: 7
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ""
            }

        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.userProfile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.id)
            }

        default:
            return state
    }
}
export const addPostCreator = (postForm) => {
    return {type: ADD_POST, postFormData:postForm}
}

export const setUserProfileAC = (profile) => {
    return {type: SET_USERS_PROFILE, userProfile:profile}
}
export const setStatusAC = (status) => {
    return {type: SET_STATUS, status:status}
}
export const deletePostCreator = (postId) => {
    return {type:'DELETE_POST', id:postId}
}

export const profileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).
        then(responce => {
            dispatch(setUserProfileAC(responce.data))
        })
    }
}
export const statusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).
            then(responce => {
                dispatch(setStatusAC(responce.data))
        })
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).
        then(responce => {
            if(responce.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}



export default profileReducer