import axios from 'axios';
import {
    getHeaders,
    URL_API_RECORD_PLAN_DETAIL,
    timeOut
} from './common.service';

export const getRecordPlanDetailAPI = async (token, id) => {
    const requestOptions = {
        headers: getHeaders(token),
        timeout: timeOut,
    };
    return await axios.get(URL_API_RECORD_PLAN_DETAIL(id), requestOptions);
};
