import {usersAPI} from "../DAL/appAPI";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_UNFOLLOW = 'TOGGLE_UNFOLLOW'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    portionSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case TOGGLE_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.arrayUsers]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.total
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.valueBoolean
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default :
            return state

    }
}

export const toggleFollowAC = (id) => {
    return {type: TOGGLE_FOLLOW, userId: id}
}
export const toggleUnfollowAC = (id) => {
    return {type: TOGGLE_UNFOLLOW, userId: id}
}
export const setUsersAC = (users) => {
    return {type: SET_USERS, arrayUsers: users}
}
export const setCurrentPageAC = (page) => {
    return {type: SET_CURRENT_PAGE, currentPage: page}
}
export const setTotalCountAC = (totalCount) => {
    return {type: SET_TOTAL_COUNT, total: totalCount}
}
export const setToggleFetching = (valueBoolean) => {
    return {type: TOGGLE_FETCHING, valueBoolean: valueBoolean}
}
export const toggleDisabledAC = (isFetching, userId) => {
    return {type: FOLLOWING_IN_PROGRESS, isFetching: isFetching, id: userId}
}

export const getUsersThunkCreator = (pageSize, currentPage) => {
    return async (dispatch) => {
        dispatch(setToggleFetching(true))
        let data = await usersAPI.getUsers(pageSize, currentPage)
        dispatch(setUsersAC(data.items))
        dispatch(setTotalCountAC(data.totalCount))
        dispatch(setToggleFetching(false))
    }
}
export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggleDisabledAC(true, userId))
        let responce = await usersAPI.follow(userId)
        if (responce.data.resultCode === 0) {
            dispatch(toggleFollowAC(userId))
        }
        dispatch(toggleDisabledAC(false, userId))
    }
}

export const unfollowThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggleDisabledAC(true, userId))
        let responce = await usersAPI.unfollow(userId)
        if (responce.data.resultCode === 0) {
            dispatch(toggleUnfollowAC(userId))
        }
        dispatch(toggleDisabledAC(false, userId))
    }
}


export default usersReducer