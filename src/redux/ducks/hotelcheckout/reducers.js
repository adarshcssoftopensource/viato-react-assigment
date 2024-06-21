import types from './types';

const initialState = {
	currentStep: 0,
	startDate: '',
	endDate: '',
	adults: '',
	children: '',
	selectedOption: null,
	firstName: '',
	lastName: '',
	street: '',
	houseNo: '',
	zip: '',
	city: ''
};

function hotelCheckoutReducer(state = initialState, action = {}) {
	switch (action.type) {
		case types.SET_STEP: {
			return { ...state, currentStep: action.payload };
		}
		case types.UPDATE_DATE:
			return { ...state, startDate: action.startDate, endDate: action.endDate };
		case types.UPDATE_INPUT:
			return { ...state, [action.key]: action.value };
		case types.SELECT_OPTION:
			return { ...state, selectedOption: { title: action.title, label: action.label, price: action.price, rateId: action.rateId } };
		case types.RESET_STATE:
			return initialState; // Reset to initial state
		default:
			return { ...state };
	}
}

export default hotelCheckoutReducer;
