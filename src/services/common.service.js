//header no token
export const headers = {
    'Content-Type': 'application/json',
};
//header with token
export const getHeaders = (token) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
};

//set time out 5 phút
export const timeOut = 5 * 60 * 1000;

//constants endpoint
export const URL_API_AUTH = process.env.REACT_APP_API_BASE_URL + '/authenticate';
export const URL_API_ASSIGN = (start_time, end_time) => {
    return process.env.REACT_APP_API_BASE_URL + `/my-assignments?start_time=${start_time}&end_time=${end_time}`
};
export const URL_API_RECORD_PLANS = (start_time, end_time) => {
    return process.env.REACT_APP_API_BASE_URL + `/record-plans/?start_time=${start_time}&end_time=${end_time}`
};
export const URL_API_CREATE_PLAN = process.env.REACT_APP_API_BASE_URL + '/record-plans/store';
export const URL_API_RECORD_PLAN_DETAIL = (id) => {
    return process.env.REACT_APP_API_BASE_URL + `/record-plans/show/${id}`;
};

