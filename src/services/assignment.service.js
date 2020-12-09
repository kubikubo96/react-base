import axios from 'axios';
import {
    getHeaders,
    URL_API_ASSIGN,
    timeOut
} from './common.service';

export const getAssignmentAPI = (token, startTime, endTime) => {
    const requestOptions = {
        headers: getHeaders(token),
        timeout: timeOut,
    };
    return axios.get(URL_API_ASSIGN(startTime, endTime), requestOptions);
};

