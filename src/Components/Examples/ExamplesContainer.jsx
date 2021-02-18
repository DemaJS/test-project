import React from 'react'
import Examples from "./Examples";
import {
    addPostExampleAC,
    exampleThunkCreator, exampleUsersThunkCreator
} from "../../Reducers/ExampleReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {
    getExampleProfile,
    getExampleText,
    getExampleValue,
    getPageSize,
    getTotalCount, getUsersSelector, superUserSelector
} from "../../Selectors/exampleSelector";


class Container extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
       this.props.exampleThunk()
        this.props.exampleUsersThunk(userId)
    }

    render() {
        return (
            <Examples {...this.props}/>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        exampleText: getExampleText(state),
        exampleProfile:getExampleProfile(state),
        pageSize:getPageSize(state),
        totalCount:getTotalCount(state),
        users:superUserSelector(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (formData) => {
            dispatch(addPostExampleAC(formData))
        },
        exampleThunk:() => {
            dispatch(exampleThunkCreator())
        },
        exampleUsersThunk: (pageSize) => {
            dispatch(exampleUsersThunkCreator(pageSize))
        }
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),withRouter)(Container)


