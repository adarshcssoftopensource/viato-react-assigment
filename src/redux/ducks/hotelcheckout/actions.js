import types from './types';

export const setStep = step => ({
	type: types.SET_STEP,
	payload: step
});

export const updateDate = (startDate, endDate) => ({
	type: types.UPDATE_DATE,
	startDate,
	endDate
});

export const updateInput = (value, key) => ({
	type: types.UPDATE_INPUT,
	value,
	key
});

export const selectOption = (title, label, price, rateId) => ({
	type: types.SELECT_OPTION,
	title,
	label,
	price,
	rateId
});

export const resetState = () => ({
	type: types.RESET_STATE
});
