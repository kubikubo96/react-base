import React from 'react';
import Typography from "@material-ui/core/Typography";
import {timeNow} from "../../../helper/handleTime";

const AssignmentTitle = (props) => {
    const {title} = props;
    return (
        <div className="assignment-title">
            <Typography
                variant="h6"><b>{title}</b><span>{timeNow('ddd DD MMM')}</span></Typography>
        </div>
    )
};
export default AssignmentTitle;
