// Action Types
export const SETDEPARTURE = 'SETDEPARTURE';
export const SETARRIVAL = 'SETARRIVAL';

// Action Creators
export const setDep = (city) => ({
    type: SETDEPARTURE,
	payload: city
});

export const setArr = (city) => ({
    type: SETARRIVAL,
	payload: city
});
