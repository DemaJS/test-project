import React from 'react'
import classes from './Examples.module.css'
import ExampleItem from "./ExampleItem";
import userPhoto from "../../img/klipartz.com (5).png";
import {NavLink} from "react-router-dom";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../Tools/Validators";
import {Control, FormControl} from "../Tools/FormControl";

const maxLength = maxLengthCreator(10)

const ExampleForm = (props) => {

    const Textarea = Control('textarea')

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter' component={FormControl} name='example' validate={[required,maxLength]}/>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const resetForm = (formValues, dispatch) => {
    dispatch(reset("example"))
}

const ExampleReduxForm = reduxForm({form:'example', onSubmitSuccess: resetForm})(ExampleForm)

const Examples = (props) => {

    let exampleData = props.exampleText.map(example => <ExampleItem example={example.local}/>)

    let addPost = (formData) => {
        props.addPost(formData.example)
    }

    return (
        <div>
            <div>
                <img src={props.exampleProfile && props.exampleProfile.photos && props.exampleProfile.photos.large}/>
            </div>
            <div className={classes.style}>
                {exampleData}
                <br/>
                <ExampleReduxForm onSubmit ={addPost}/>
            </div>
            <div>
                {props.users.map(user => <div key={user.id}>{user.name}

                    <NavLink to = {'/profile/' + user.id}>
                        <img src={user.photos.large != null ? user.photos.large : userPhoto}/>
                    </NavLink>

                </div>)}
            </div>
        </div>
    )
}
export default Examples



