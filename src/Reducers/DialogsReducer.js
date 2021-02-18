
const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    messageData: [
        {message: 'Luke I am your father!', id: 1},
        {message: 'May the Force be with you.', id: 2},
        {message: 'I am Luke Skywalker i am here to save you!', id: 3}
    ],
    fluxValueMessage: 'how are you',
    dialogData: [
        {name: 'Darth Vader', id: 1},
        {name: 'Yoda', id: 2},
        {name: 'Luke Skywalker', id: 3}
    ]
}
const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case  ADD_MESSAGE:
            let stateCopy = {
                ...state,
                messageData:[...state.messageData, {message:action.dialogForm}],
            }
            return stateCopy;

        default:
            return state;
    }
}

export let addMessageCreator = (dialogsData) => {
    return {type: 'ADD_MESSAGE', dialogForm:dialogsData}
}

export default dialogReducer
