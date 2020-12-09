import React from 'react';
import './ErrorMessage.css';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import {errorMessage} from "../../../constants/errorMessages";

const ErrorMessage = (props) => {
    const {errorCode} = props;

    return (
        <div>
            <Dialog
                open={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{errorMessage(errorCode)}</DialogTitle>
            </Dialog>
        </div>
    );
};

export default ErrorMessage;
