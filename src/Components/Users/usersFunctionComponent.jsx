import React from 'react'
import classes from "./Users.module.css";
import Pagination from "./Pagination";
import User from "./User";


const UsersFunctionComponent = (props) => {

    return (
        <div>
            <div className={classes.header}>
                Users
            </div>
            <Pagination totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage}
                        onCurrentPage={props.onCurrentPage} portionSize = {props.portionSize}/>
            {
                props.users.map(user => <User user={user} followingInProgress={props.followingInProgress}
                                              unfollowThunk={props.unfollowThunk} followThunk={props.followThunk}/>
                )
            }
        </div>
    )
}
export default UsersFunctionComponent