import React from "react";
import classes from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {LoginFormControl} from "../Tools/FormControl";
import {required} from "../Tools/Validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Reducers/AuthReducer";
import {Redirect} from "react-router";

const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            {props.error && <div className={classes.loginError}>{props.error}</div>}
            <div>
                <Field placeholder='Email' component={LoginFormControl} name='Email'
                       validate={[required]}/>
            </div>
            <div>
                <Field type='password' placeholder='Password' component={LoginFormControl} name='password'
                validate={[required]}/>
            </div>
            <div>
                <Field type='checkbox' component='input' name='rememberMe'/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const ReduxFormContainer = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
        props.loginThunk(formData.Email,formData.password,formData.rememberMe)
    }
    if(props.isAuth === true) {
        return <Redirect to='/profile'/>
    }
    return (
        <div className={classes.wrapper}>
            <h1>Login</h1>
           <ReduxFormContainer onSubmit = {onSubmit}/>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loginThunk:(email,password,rememberMe) => {
            dispatch(loginThunkCreator(email,password,rememberMe))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)