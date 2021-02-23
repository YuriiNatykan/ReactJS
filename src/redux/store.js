import profReducer from "./prof-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store;
store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 15},
                {id: 2, message: 'Hi, how are you', likesCount: 20}
            ],
            newPostText: 'Hey Yoy'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Rita'},
                {id: 3, message: 'How are you'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Yura'},
                {id: 2, name: 'Rita'},
                {id: 3, name: 'Misha'},
                {id: 4, name: 'Dasha'},
                {id: 5, name: 'Masha'},
                {id: 6, name: 'Valera'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('gggg')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer паттерн
    },

    dispatch(action) {
        this._state.profilePage = profReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;
;
