import types from './types';

const initialState = {
	counter: 0,
	text: ''
};

function exampleReducer(state = initialState, action = {}) {
	switch (action.type) {
		case types.SET_COUNTER: {
			return {
				...state,
				counter: action.payload
			};
		}

		case types.SET_TEXT: {
			return {
				...state,
				text: action.payload
			};
		}

		default:
			return { ...state };
	}
}

export default exampleReducer;
