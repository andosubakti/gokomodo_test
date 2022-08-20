import axios from "axios";

export const apiRequest = async ({ url, method, timeout, headers, bodyRequest, params, path }) => {
    const baseUrl = url ? `${url}` : `https://swapi.dev/api`;

    const config = {
        method,
        url: baseUrl + path
    };

    if (headers) {
        config.headers = { ...config.headers, ...headers };
    }

    if (bodyRequest) {
        config.data = bodyRequest;
    }
    if (params) {
        config.params = params;
    }

    if (timeout) {
        config.timeout = timeout;
    }

    return axios(config)
        .then((res) => res)
        .catch((err) => {
            console.info('[ERROR] Api Request: ', err);
            throw err;
        });
};