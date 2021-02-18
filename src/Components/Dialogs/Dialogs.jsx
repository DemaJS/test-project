import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./Dialog";
import Message from "./Message";
import {Redirect} from "react-router";
import {Field, reduxForm, reset} from "redux-form";
import {FormControl} from "../Tools/FormControl";
import {maxLengthCreator} from "../Tools/Validators";

const maxLength = maxLengthCreator(10)
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Send message' name='dialogs' component = {FormControl}
            validate={[maxLength]}/>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const resetForm = (formValues, dispatch) => {
    dispatch(reset("dialogs"))
}
const DialogsReduxForm = reduxForm({form:'dialogs', onSubmitSuccess: resetForm})(DialogsForm)

const Dialogs = (props) => {

    let messageElements = props.messageData.map(message => <Message message={message.message}/>)
    let dialogElements = props.dialogData.map(dialog => <Dialog name={dialog.name}/>)

    let onAddPost = (dialogsData) => {
        props.addPost(dialogsData.dialogs)
    }

    if (props.isAuth === false) {
        return <Redirect to='/login'/>
    }

    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.heading}>Dialogs</div>
            <div className={classes.dialogs}>
                <div>
                    {dialogElements}
                </div>
            </div>
            <div className={classes.messages}>
                <div>
                    {messageElements}
                    <br/>
                    <DialogsReduxForm onSubmit={onAddPost}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs