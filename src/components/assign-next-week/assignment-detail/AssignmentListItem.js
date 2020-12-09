import React from 'react';
import {timeNow} from "../../../helper/handleTime";
import AssignmentTitle from "./AssignmentTitle";
import Divider from "@material-ui/core/Divider";

const AssignmentListItem = (props) => {
    const {title, assign} = props;
    return (
        <React.Fragment>
            <AssignmentTitle title={title}/>
            <Divider/>
            <div className="assignment-list">
                <div className="assignment-content">{assign.name && assign.name}</div>
                <div className="assignment-hour">{timeNow('hh:mm A')}</div>
            </div>
        </React.Fragment>
    )
};

export default AssignmentListItem;
