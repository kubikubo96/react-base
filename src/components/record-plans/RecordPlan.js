import React, {useEffect, useState} from 'react';
import './RecordPlan.css';
import {SnackbarProvider, useSnackbar} from 'notistack';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import withUrlParams from "../higher-order-component/withUrlParams";
import {getRecordPlanAPI} from "../../services/record-plan.service";
import {selectAuthToken} from "../../stores/slices/auth-token/authTokenSlice";
import ErrorMessage from "../common/errors/ErrorMessage";
import Loading from "../common/loading/Loading";
import {endTimeMonth, startTimeMoth, timeNow} from "../../helper/handleTime";
import Typography from "@material-ui/core/Typography";
import {
    selectSuccessNotify,
    setSuccessNotify
} from "../../stores/slices/record-plan/successNotifySlice";

const useStyles = makeStyles(() => ({
    fabButton: {
        position: 'fixed',
        zIndex: 1,
        bottom: 20,
        right: 15,
        margin: '0 auto',
        background: '#3f51b5 !important',
    },
}));

const RecordPlan = (props) => {
    const {uuid} = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const token = useSelector(selectAuthToken);
    const successNotify = useSelector(selectSuccessNotify);
    const [errorCode, setErrorCode] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [recordPlans, setRecordPlans] = useState([]);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        const loadRecordPlan = (token, startTimeMoth, endTimeMonth) => {
            getRecordPlanAPI(token, startTimeMoth, endTimeMonth)
                .then(res => {
                    setIsLoaded(true);
                    setRecordPlans(res.data);
                })
                .catch(err => {
                    setIsLoaded(true);
                    setErrorCode(err.data);
                    console.log(err)
                })
        };
        if (token) {
            loadRecordPlan(token, startTimeMoth, endTimeMonth);
        }
    }, [token]);

    useEffect(() => {
        const variant = 'success';
        if (successNotify) {
            enqueueSnackbar('Tạo Chương trình Thành công!', {variant});
            dispatch(setSuccessNotify());
        }
    }, [enqueueSnackbar, successNotify, dispatch]);

    const LinkRecordPlanDetail = (id) => {
        return `/record-plan-detail/${id}/?record=${id}&uuid=${uuid}`
    };
    const allRecordPlans = () => {
        return recordPlans.map((recordPlan) => {
            return (
                <div className="record" key={recordPlan.id}>
                    <Link className="link-route" to={LinkRecordPlanDetail(recordPlan.id)}>
                        <div className="record-content">{recordPlan.name}</div>
                    </Link>
                    <div className="record-hour">{timeNow('hh:mm A')}</div>
                </div>
            );
        });
    };

    if (errorCode) {
        return <ErrorMessage errorCode={errorCode}/>;
    } else if (!isLoaded) {
        return <Loading/>;
    } else {
        const LinkCreatePlan = `/create-plan/?uuid=${uuid}`;
        return (
            <React.Fragment>
                <div className="record-plans">
                    <Typography
                        variant="h6"><b><span>{timeNow('ddd DD MMM')}</span></b>
                    </Typography>
                    <Divider/>
                    {allRecordPlans()}
                </div>
                <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <Link className="link-route" to={LinkCreatePlan}> <AddIcon/></Link>
                </Fab>
            </React.Fragment>
        );

    }
};

// export default withUrlParams(RecordPlan);

const RealRecordPlan = (props) => {
    return (
        <SnackbarProvider maxSnack={3}
                          anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}>
            <RecordPlan {...props}/>
        </SnackbarProvider>
    )
};

export default withUrlParams(RealRecordPlan);
