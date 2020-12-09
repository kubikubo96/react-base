import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {checkAuthAPI} from "../../services/auth.service";
import {loadStorage, saveStorage} from "../../helper/localStorage";
import {setAuthToken} from "../../stores/slices/auth-token/authTokenSlice";
import {getUrlParam} from "../../helper/common";
import {timeNowUnix} from "../../helper/handleTime";
import jwt_decode from "jwt-decode";
import {logError} from "../../helper/logError";
import ErrorMessage from "../common/errors/ErrorMessage";

const withToken = BaseComponent => (props) => {
    const uuid = getUrlParam("uuid");
    const [errorCode, setErrorCode] = useState(null);
    const token = loadStorage('accessToken');
    const dispatch = useDispatch();

    useEffect(() => {
        const getToken = (uuid) => {
            checkAuthAPI(uuid)
                .then(res => {
                    if (res.data.access_token) {
                        dispatch(setAuthToken(res.data.access_token));
                        saveStorage('accessToken', res.data.access_token);
                    }
                })
                .catch(err => {
                    setErrorCode('AUTH_FAILED');
                    logError(err,"withToken/getToken");
                });
        };
        if (uuid) {
            if (!token) {
                getToken(uuid);
            } else {
                const userInfo = jwt_decode(token);
                if (userInfo.uuid !== uuid || userInfo.exp < timeNowUnix) {
                    getToken(uuid);
                } else {
                    dispatch(setAuthToken(token));
                }
            }
        }
    }, [uuid, dispatch, token]);

    if (!uuid) {
        return <ErrorMessage errorCode={"NOT_UUID"}/>
    }
    if (errorCode) {
        return <ErrorMessage errorCode={errorCode}/>
    } else {
        return (
            <React.Fragment>
                <BaseComponent {...props}/>
            </React.Fragment>
        );
    }
};

export default withToken;
