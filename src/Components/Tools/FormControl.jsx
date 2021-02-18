import React from 'react'
import classes from './FormControl.module.css'

export const FormControl = ({input,meta, ...props}) => {
    const error = meta.error && meta.touched
    return (
        <div className={error && classes.wrapper}>
            <textarea {...input} {...props}/><br/>
            {error && <span className={classes.error}>{meta.error}</span>}
        </div>
    )
}
export const LoginFormControl = ({input,meta, ...props}) => {
    const error = meta.error && meta.touched
    return (
        <div className={error && classes.wrapper}>
            <input {...input} {...props}/><br/>
            {error && <span className={classes.error}>{meta.error}</span>}
        </div>
    )
}

export const Control = (Element) => {
    return ({input,meta, ...props}) => {
        const error = meta.error && meta.touched
        return (
            <div className={error && classes.wrapper}>
                {React.createElement( Element,{...input}, {...props})}/><br/>
                {error && <span className={classes.error}>{meta.error}</span>}
            </div>
        )
    }
}