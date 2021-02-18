import React from 'react'
import {addMessageCreator, changeMessageCreator} from "../../Reducers/DialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state) => {
        return {
            messageData:state.dialogsPage.messageData,
            dialogData:state.dialogsPage.dialogData,
            fluxValueMessage:state.dialogsPage.fluxValueMessage,
            isAuth:state.auth.isAuth
        }
}
let mapDispatchToProps = (dispatch) => {
        return {
            addPost: (dialogsData) => {
                dispatch(addMessageCreator(dialogsData))
            }
        }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)