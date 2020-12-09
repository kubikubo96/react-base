import React from 'react';
import {SnackbarProvider, useSnackbar} from 'notistack';
import './CreatePlan.css';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {formatTime} from "../../helper/handleTime";
import {createPlan} from "../../services/record-plan.service";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthToken} from "../../stores/slices/auth-token/authTokenSlice";
import CircularProgress from '@material-ui/core/CircularProgress';
import {useHistory} from "react-router-dom";
import withUrlParams from "../higher-order-component/withUrlParams";
import {setSuccessNotify} from "../../stores/slices/record-plan/successNotifySlice";

const useStyles = makeStyles(() => ({
    fabProgress: {
        position: 'absolute',
        left: '50%',
        top: '22px',
        zIndex: 1,
        width: '30px !important',
        height: '30px !important',
        margin: '-20px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
    },
}));

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Bạn chưa nhập tên chương trình'),
    description: yup
        .string()
        .required('Bạn chưa nhập mô tả'),
    start_time: yup
        .string()
        .required('Bạn chưa nhập thời gian bắt đầu'),
    end_time: yup
        .string()
        .required('Bạn chưa nhập thời gian kết thúc'),
    address: yup
        .string()
        .required('Bạn chưa nhập địa chỉ'),
});

const CreatePlan = (props) => {
    const {uuid} = props;
    const {enqueueSnackbar} = useSnackbar();
    const classes = useStyles();
    const token = useSelector(selectAuthToken);
    const [loading, setLoading] = React.useState(false);
    const timer = React.useRef();
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const formic = useFormik({
        initialValues: {
            name: '',
            description: '',
            start_time: '',
            end_time: '',
            address: '',
        },
        validationSchema: validationSchema,
        onSubmit: (data) => {
            if (!loading) {
                setLoading(true);
                timer.current = window.setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
            data.start_time = formatTime(data.start_time);
            data.end_time = formatTime(data.end_time);
            console.log(data);
            createPlan(token, data)
                .then(res => {
                    setLoading(true);
                    dispatch(setSuccessNotify());
                    history.push(`/record-plans/?uuid=${uuid}`);
                })
                .catch(err => {
                    const variant = 'warning';
                    enqueueSnackbar('Đã có lỗi xãy ra.', {variant});
                });

        },
    });

    return (
        <div className="create-calendar">
            <form className="form-create-plan" onSubmit={formic.handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Tên Chương trình"
                    value={formic.values.name}
                    onChange={formic.handleChange}
                    error={formic.touched.name && Boolean(formic.errors.name)}
                    helperText={formic.touched.name && formic.errors.name}
                />
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Mô tả"
                    value={formic.values.description}
                    onChange={formic.handleChange}
                    error={formic.touched.description && Boolean(formic.errors.description)}
                    helperText={formic.touched.description && formic.errors.description}
                />
                <TextField
                    id="start_time"
                    name="start_time"
                    label="Thời gian bắt đầu"
                    type="datetime-local"
                    value={formic.values.start_time}
                    onChange={formic.handleChange}
                    error={formic.touched.start_time && Boolean(formic.errors.start_time)}
                    helperText={formic.touched.start_time && formic.errors.start_time}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="end_time"
                    name="end_time"
                    label="Thời gian kết thúc"
                    type="datetime-local"
                    className={classes.textField}
                    value={formic.values.end_time}
                    onChange={formic.handleChange}
                    error={formic.touched.end_time && Boolean(formic.errors.end_time)}
                    helperText={formic.touched.end_time && formic.errors.end_time}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Địa chỉ"
                    value={formic.values.address}
                    onChange={formic.handleChange}
                    error={formic.touched.address && Boolean(formic.errors.address)}
                    helperText={formic.touched.address && formic.errors.address}
                />
                <Button color="primary" variant="contained" fullWidth type="submit" style={{marginTop: 20}}
                        disabled={loading}>
                    {loading && <CircularProgress size={68} className={classes.fabProgress}/>}
                    Tạo chương trình
                </Button>
            </form>
        </div>
    );
};

const RealCreatePlan = (props) => {
    return (
        <SnackbarProvider maxSnack={3}>
            <CreatePlan {...props}/>
        </SnackbarProvider>
    );
};

export default withUrlParams(RealCreatePlan);
