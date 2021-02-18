let state = {

    rerender() {
        console.log('hi')
    },
    profilePage: {
        postData: [
            {message: 'Come to the dark side!', like: '25'},
            {message: 'Learn JavaScript!', like: '20'},
            {message: 'React Redux!', like: '30'}
        ],
        fluxValuePost: 'hello'
    },
    dialogsPage: {
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
    },
    examplePage: {
        exampleValue: 'Hello',
        exampleText: [
            {local: 'hello world'},
            {local: 'i learn react'},
            {local: 'JS cool'}
        ]
    },

    subscribe(observer) {
        this.rerender = observer
    },

    dispatch(action) {

        this.dialogsPage = dialogReducer(this.dialogsPage, action)
        this.profilePage = profileReducer(this.profilePage, action)
        this.examplePage = exampleReducer(this.examplePage, action)
        this.rerender()

        switch (action.type) {
            case 'ADD-POST':
                this.addPost();
                break;
            case 'CHANGE-POST':
                this.changePost(action.newPostText);
                break;
            case 'ADD-MESSAGE':
                this.addMessage();
                break;
            case 'CHANGE-MESSAGE':
                this.changeMessage(action.newMessageText);
                break;
            case 'ADD-POST-EXAMPLE':
                this.addPostExample();
                break;
            case 'CHANGE-EXAMPLE':
                this.changeExample(action.newExampleText)
                break;
        }
    },

    addPost() {
        let post = {
            message: this.profilePage.fluxValuePost,
            like: 0
        }
        this.profilePage.postData.push(post)
        this.profilePage.fluxValuePost = ''
        this.rerender()
    },
    changePost(text) {
        this.profilePage.fluxValuePost = text
        this.rerender()
    },
    addMessage() {
        let message = {
            message: this.dialogsPage.fluxValueMessage,
            id: 4
        }
        this.dialogsPage.messageData.push(message)
        this.dialogsPage.fluxValueMessage = ''
        this.rerender()
    },
    changeMessage(text) {
        this.dialogsPage.fluxValueMessage = text
        this.rerender()
    },
    addPostExample() {
        let examplePost = {local: this.examplePage.exampleValue}
        this.examplePage.exampleText.push(examplePost)
        this.examplePage.exampleValue = ''
        this.rerender()
    },
    changeExample(text) {
        this.examplePage.exampleValue = text
        this.rerender()
    }

}






