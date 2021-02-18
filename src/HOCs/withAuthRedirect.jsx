import React from 'react'
import {Redirect} from "react-router";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (props.isAuth === false) return <Redirect to='/login'/>
            return <Component {...props}/>
    }
    connect(mapStateToProps)(RedirectComponent)
    return RedirectComponent
}
