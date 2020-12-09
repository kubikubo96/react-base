import axios from 'axios';
import {
    headers,
    URL_API_AUTH,
    timeOut
} from './common.service';

export const checkAuthAPI = async (uuid) => {
    const body = {
        "uuid": uuid
    };
    const requestOptions = {
        headers: headers,
        timeout: timeOut,
    };
    return await axios.post(URL_API_AUTH, JSON.stringify(body), requestOptions);
};
