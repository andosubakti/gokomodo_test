import { fetchPeopleList } from "../../services/people";
import { getPeopleAction, getPeopleActionError, getPeopleActionSuccess } from "../action/peopleAction";

export const getPeopleService = (params) => {
    return async (dispatch) => {
        dispatch(getPeopleAction());
        return fetchPeopleList(params)
            .then((res) => {
                dispatch(getPeopleActionSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getPeopleActionError(err));
            });
    };
};