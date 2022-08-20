import { GET_PEOPLE, GET_PEOPLE_ERROR, GET_PEOPLE_SUCCESS } from "../types/peopleType";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PEOPLE:
            return {
                ...state,
                loading: true,
            };
        case GET_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_PEOPLE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default peopleReducer;