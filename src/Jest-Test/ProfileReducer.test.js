import profileReducer, {addPostCreator, deletePostCreator} from "../Reducers/ProfileReducer";

let state = {
    postData: [
        {id: 1, message: "Hi Fi Baich!", like: 5},
        {id: 2, message: "Kavabanga!", like: 5},
        {id: 3, message: "Yo Yo!", like: 5}
    ]
}

test('test profile add post', () => {
    let action = addPostCreator('hi hi')
    let newState = profileReducer(state,action)

expect(newState.postData.length).toBe(4)
});

test ('delete post profile', () => {
    let action = deletePostCreator(3)
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(2)
})