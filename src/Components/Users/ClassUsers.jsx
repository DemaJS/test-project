import React from 'react'
import UsersFunctionComponent from "./usersFunctionComponent";
import preloader from './../../img/150x150.gif'


class Users extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
    }

    onCurrentPage = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsersThunk(this.props.pageSize, page)
    }
    render() {

        return <>
            <div>
                {this.props.isFetching ? <img src={preloader}/> : null}
            </div>
            <UsersFunctionComponent onCurrentPage = {this.onCurrentPage} {...this.props}/>
        </>
    }
}


export default Users