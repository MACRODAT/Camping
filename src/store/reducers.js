import { SETDEPARTURE, SETARRIVAL, SETLINK, SETITI, SETROUTE, DELETEWAYS, deleteWays, SETPROFILE } from './actions';

class profile
{
    constructor(name = "", email = "", username = "")
    {
        if (name == "" &&
        email == "" &&
        username == "")
        {
            this.loggedIn = false;
            this.name = ""
            this.username = ""
            this.email = ""
        }
        else{
            this.name = name;
            this.username = username;
            this.email = email;
            this.loggedIn = true;
        }
    }
}

// Initial State
const initialState = {
    dep: null,
	arr: null,
    link: "landing",
    itinerary: {},
    deletedWays : [],
    profile_: new profile(),
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
        case DELETEWAYS:
            return {
                ...state,
                deletedWays: state.deletedWays.concat([action.payload])
            }
        
        case SETPROFILE:
            return {
                ...state,
                profile_: action.payload
            }
        
        default:
            return state;
    }
};

export default counterReducer;
export {
    profile
}
