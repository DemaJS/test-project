import React from 'react'
import {connect} from "react-redux";
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC,
    unfollowThunkCreator
} from "../../Reducers/UsersReducer";
import Users from "./ClassUsers";


let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        totalCount:state.usersPage.totalCount,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
        portionSize:state.usersPage.portionSize
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followThunk:(userId) => {
            dispatch(followThunkCreator(userId))
        },
        unfollowThunk:(userId) => {
            dispatch(unfollowThunkCreator(userId))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        getUsersThunk:(pageSize,currentPage) => {
            dispatch(getUsersThunkCreator(pageSize,currentPage))
        }
    }
}
const UserContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UserContainer