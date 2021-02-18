import {authAPI} from "../DAL/appAPI";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case  SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export let setUserDataAC = (id, email, login,isAuth) => {
    return {type: SET_USER_DATA, data: {id, email, login, isAuth}}
}

export const authMeThunkCreator = () => {
    return (dispatch) => {
        authAPI.authMe().then(responce => {
            if (responce.data.resultCode === 0) {
                let {id, email, login} = responce.data.data
                dispatch(setUserDataAC(id,email,login,true))
            }
        })
    }
}
export const loginThunkCreator = (email,password,rememberMe) => {
    return (dispatch) => {
        authAPI.login(email,password,rememberMe).then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(authMeThunkCreator())
            } else {
                let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Error'
                dispatch(stopSubmit('login',{_error:message}))
            }
        })
    }
}
export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setUserDataAC(null,null,null,false))
            }
        })
    }
}
export default authReducer

