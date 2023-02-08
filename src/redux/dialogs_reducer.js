

const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

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

};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			return {
				...state,
				messages: [...state.messages, {id: 1, message: action.newMessageBody,}],

			};
		}
		default: return state;
	}
}

export const sendMessageActiveCreator = (newMessageBody) => {
	return {
		type: SEND_MESSAGE, newMessageBody
	}
}


export default dialogsReducer