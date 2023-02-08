import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';
import usersReducer from './users_reducer';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Привет, как у тебя дела?', value: 3 },
				{ id: 2, message: 'Мой первый пост!', value: 33 },
				{ id: 3, message: 'Мой первый пост! sexyyyy', value: 333 },
				{ id: 4, message: 'Мой первый пост! ohh my', value: 333 },
			],
			newPostText: 'Fucking love',
		},

		messagePage: {

			dialogs: [
				{ id: 1, name: 'Sergo' },
				{ id: 2, name: 'Sasha' },
				{ id: 3, name: 'Slava' },
				{ id: 4, name: 'Nastya' },
				{ id: 5, name: 'Lena' },
				{ id: 6, name: 'Ann' },
			],

			messages: [
				{ id: 0, message: 'hi bro' },
				{ id: 1, message: 'hi man' },
				{ id: 2, message: 'how old you' },
				{ id: 3, message: 'thanks' },
				{ id: 4, message: 'bay bay' },
				{ id: 5, message: 'hi' },
			],
			newMessageBody: '',
		},


		sidebar: {
			friendsData: [
				{ adress: `"https://sun1-96.userapi.com/s/v1/ig2/D8nxwFKxIp2xhPvkypuSDuTfxxA6ydRNUJgsbH7AI2yB12yKArOV8sxIqXcgO3Wly2RLhV-FlCHiAsrWADUhl5De.jpg?size=50x50&quality=95&crop=80,194,499,499&ava=1"`, name: 'Sasha' },
				{ adress: `"https://sun1-96.userapi.com/s/v1/ig2/D8nxwFKxIp2xhPvkypuSDuTfxxA6ydRNUJgsbH7AI2yB12yKArOV8sxIqXcgO3Wly2RLhV-FlCHiAsrWADUhl5De.jpg?size=50x50&quality=95&crop=80,194,499,499&ava=1"`, name: 'Sasha' },
				{ adress: `"https://sun1-96.userapi.com/s/v1/ig2/D8nxwFKxIp2xhPvkypuSDuTfxxA6ydRNUJgsbH7AI2yB12yKArOV8sxIqXcgO3Wly2RLhV-FlCHiAsrWADUhl5De.jpg?size=50x50&quality=95&crop=80,194,499,499&ava=1"`, name: 'Slava' },
			],
		},

		usersPage: {
			users: [

			]

		},
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('hi')
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.messagePage = dialogsReducer(this._state.messagePage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)
		this._state.usersPage = usersReducer(this._state.usersPage, action)

		this._callSubscriber(this._state);
	}

}






window.store = store;
export default store