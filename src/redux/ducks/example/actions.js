import types from './types';

export const setCounter = count => ({
	type: types.SET_COUNTER,
	payload: count
});

export const setText = text => ({
	type: types.SET_TEXT,
	payload: text
});
