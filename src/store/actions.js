// Action Types
export const SETDEPARTURE = 'SETDEPARTURE';
export const SETARRIVAL = 'SETARRIVAL';
export const SETLINK = 'SETLINK'
export const SETITI = 'SETITI'
export const SETROUTE = 'SETROUTE'

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

export const setIti = (link) => ({
    type: SETITI,
	payload: link
});

export const setRoute = (link) => ({
    type: SETROUTE,
	payload: link
});

