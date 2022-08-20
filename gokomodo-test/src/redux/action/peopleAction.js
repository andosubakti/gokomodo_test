import { GET_PEOPLE, GET_PEOPLE_ERROR, GET_PEOPLE_SUCCESS } from "../types/peopleType";

export const getPeopleAction = () => ({
    type: GET_PEOPLE,
});

export const getPeopleActionSuccess = (data) => ({
    type: GET_PEOPLE_SUCCESS,
    payload: data,
});

export const getPeopleActionError = (data) => ({
    type: GET_PEOPLE_ERROR,
    payload: data,
});