import { INCREMENT, DECREMENT, SETDEPARTURE, SETARRIVAL } from './actions';

// Initial State
const initialState = {
    dep: null,
	arr: null
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
        default:
            return state;
    }
};

export default counterReducer;
