import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {profileThunkCreator, statusThunkCreator, updateStatusThunkCreator} from "../../../Reducers/ProfileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../HOCs/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.id
        }
        this.props.profileThunk(userId)
        this.props.statusThunk(userId)
    }

    render() {

        return (
        <Profile{...this.props}/>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile,
        isAuth:state.auth.isAuth,
        status:state.profilePage.status,
        id:state.auth.id
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        profileThunk: (userID) => {
            dispatch(profileThunkCreator(userID))
        },
        statusThunk: (userId) => {
            dispatch(statusThunkCreator(userId))
        },
        updateStatusThunk:(status) => {
            dispatch(updateStatusThunkCreator(status))
        }
    }
}


export default compose(connect(mapStateToProps,mapDispatchToProps),withRouter,withAuthRedirect)(ProfileContainer)
