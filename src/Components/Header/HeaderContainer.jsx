import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunkCreator, logoutThunkCreator} from "../../Reducers/AuthReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        authMeThunk: () => {
            dispatch(authMeThunkCreator())
        },
        logoutThunk:() => {
            dispatch(logoutThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)