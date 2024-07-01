import { SETDEPARTURE, SETARRIVAL, SETLINK, SETITI, SETROUTE } from './actions';

// Initial State
const initialState = {
    dep: null,
	arr: null,
    link: "",
    itinerary: {},
    route: null
};

// Reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETDEPARTURE:
            return {
                ...state,
                dep: action.payload,
            };
        case SETARRIVAL:
            return {
                ...state,
                arr: action.payload,
            };
        case SETLINK:
            return {
                ...state,
                link: action.payload
            }
        case SETITI:
            return {
                ...state,
                itinerary: action.payload
            }
        case SETROUTE:
            return {
                ...state,
                route: action.payload
            }
        default:
            return state;
    }
};

export default counterReducer;
