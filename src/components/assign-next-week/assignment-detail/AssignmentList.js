import React, {useEffect, useState} from 'react';
import {getAssignmentAPI} from "../../../services/assignment.service";
import {logError} from "../../../helper/logError";
import {useSelector} from "react-redux";
import {selectAuthToken} from "../../../stores/slices/auth-token/authTokenSlice";
import AssignmentListItem from "./AssignmentListItem";
import ErrorMessage from "../../common/errors/ErrorMessage";
import Loading from "../../common/loading/Loading";

const AssignmentList = (props) => {
    const {title, startTime, endTime, placeFun} = props;
    const token = useSelector(selectAuthToken);
    const [errorCode, setErrorCode] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [assigns, setAssigns] = useState([]);

    useEffect(() => {
        const loadAssign = () => {
            getAssignmentAPI(token, startTime, endTime)
                .then(res => {
                    setIsLoaded(true);
                    setAssigns(res.data);
                })
                .catch(err => {
                    setIsLoaded(true);
                    setErrorCode(err.data);
                    logError(err, placeFun);
                })
        };
        if (token) {
            loadAssign()
        }
    }, [token, startTime, endTime, placeFun]);
    if (errorCode) {
        return <ErrorMessage errorCode={errorCode}/>
    } else if (!isLoaded) {
        return <Loading/>
    } else {
        return (
            assigns.map((assign, index) => {
                return (
                    <AssignmentListItem key={index} assign={assign} title={title}/>
                )
            })
        )
    }
};

export default AssignmentList;
