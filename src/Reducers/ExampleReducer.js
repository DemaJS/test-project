import {exampleAPI} from "../DAL/appAPI";

let initialState = {
    exampleText: [
        {local: 'hello world'},
        {local: 'i learn react'},
        {local: 'JS cool'}
    ],
    exampleProfile:{},
    users:[],
    pageSize:null,
    totalCount:null
}
const exampleReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST-EXAMPLE':
            let stateCopy = {
                ...state,
                exampleText:[...state.exampleText, {local:action.exampleForm}],
            }
            return stateCopy;
        case 'SET_PROFILE_EXAMPLE':
            return {
                ...state,
                exampleProfile:action.exampleProfile
            }
        case 'SET_USERS_EXAMPLE':
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state;
    }
}

export let addPostExampleAC = (formData) => {
    return (
        {type: 'ADD-POST-EXAMPLE', exampleForm:formData}
    )
}

export let setProfileExampleAC = (profile) => {
    return {type:'SET_PROFILE_EXAMPLE', exampleProfile:profile}
}

export let setExampleUsersAC = (users) => {
    return {type:'SET_USERS_EXAMPLE', users:users}
}

export const exampleThunkCreator = () => {
    return async (dispatch) => {
        let responce = await exampleAPI.ajaxExample()
            dispatch(setProfileExampleAC(responce.data))
    }
}
export const exampleUsersThunkCreator = () => {
    return async (dispatch) => {
        let responce = await exampleAPI.exempleAjaxUser()
                dispatch(setExampleUsersAC(responce.data.items))
    }
}

export default exampleReducer