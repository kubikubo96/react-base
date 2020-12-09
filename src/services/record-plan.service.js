import axios from 'axios';
import {
    getHeaders,
    URL_API_RECORD_PLANS,
    URL_API_CREATE_PLAN,
    timeOut
} from './common.service';

export const getRecordPlanAPI = async (token, startTime, endTime) => {
    const requestOptions = {
        headers: getHeaders(token),
        timeout: timeOut,
    };
    return await axios.get(URL_API_RECORD_PLANS(startTime, endTime), requestOptions);
};

export const createPlan = async (token, data) => {
    const requestOptions = {
        headers: getHeaders(token),
        timeout: timeOut,
    };
    return await axios.post(URL_API_CREATE_PLAN, JSON.stringify(data), requestOptions);
};
