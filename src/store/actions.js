// Action Types
export const SETDEPARTURE = 'SETDEPARTURE';
export const SETARRIVAL = 'SETARRIVAL';
export const SETLINK = 'SETLINK'

// Action Creators
export const setDep = (city) => ({
    type: SETDEPARTURE,
	payload: city
});

export const setArr = (city) => ({
    type: SETARRIVAL,
	payload: city
});

export const setLink = (link) => ({
    type: SETLINK,
	payload: link
});
