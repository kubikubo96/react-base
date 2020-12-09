import React, {useEffect, useState} from 'react';
import './RecordPlanDetail.css';
import withUrlParams from "../higher-order-component/withUrlParams";
import {getRecordPlanDetailAPI} from "../../services/record-plan-detail.service";
import {useSelector} from "react-redux";
import {selectAuthToken} from "../../stores/slices/auth-token/authTokenSlice";
import Loading from "../common/loading/Loading";

const RecordPlanDetail = (props) => {
    const token = useSelector(selectAuthToken);
    const {record} = props;
    const [errorCode, setErrorCode] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [recordPlanDetail, setRecordPlanDetail] = useState(null);

    useEffect(() => {
        const loadRecordPlanDetail = (token, record) => {
            getRecordPlanDetailAPI(token, record)
                .then(res => {
                    setIsLoaded(true);
                    setRecordPlanDetail(res.data.data);
                    console.log(res.data.data);
                })
                .catch(err => {
                    setIsLoaded(true);
                    setErrorCode(err.data);
                    console.log(err.data);
                });
        };

        if (token) {
            loadRecordPlanDetail(token, record);
        }
    }, [token, record]);

    if (errorCode) {
        return <h1>ERR</h1>;
    } else if (!isLoaded) {
        return <Loading/>
    } else {
        return (
            <div className="record-plan-detail">
                <h4>Tên chương trình:</h4>
                <p>{recordPlanDetail && recordPlanDetail.name}</p>
                <h4>Mô tả:</h4>
                <p>{recordPlanDetail && recordPlanDetail.description}</p>
                <h4>địa chỉ:</h4>
                <p>{recordPlanDetail && recordPlanDetail.address}</p>
                <h4>Thời gian bắt đầu:</h4>
                <p>{recordPlanDetail && recordPlanDetail.start_time}</p>
            </div>
        )

    }
};

export default withUrlParams(RecordPlanDetail);
