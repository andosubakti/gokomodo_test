import { apiRequest } from "../utils/api";

export const fetchPeopleList = async (params) =>
    apiRequest({
        path: `/people`,
        method: 'GET',
        params
    });