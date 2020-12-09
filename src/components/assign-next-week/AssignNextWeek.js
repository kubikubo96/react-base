import React from 'react';
import './AssignNextWeek.css';
import AssignmentList from "./assignment-detail/AssignmentList";
import {endTimeToday, endTimeTomorrow, startTimeToday, startTimeTomorrow} from "../../helper/handleTime";

const AssignNextWeek = () => {
    return (
        <div className="assignment-wap">
            <div className="assignment-now">
                <AssignmentList
                    title="Hôm nay"
                    startTime={endTimeToday}
                    endTime={startTimeToday}
                    palceFun={"assignment today"}
                />
            </div>
            <div className="assignment-tomo">
                <AssignmentList
                    title="Ngày mai"
                    startTime={endTimeTomorrow}
                    endTime={startTimeTomorrow}
                    palceFun={"assignment tomorrow"}
                />
            </div>
            <div className="assignment-week">
                <AssignmentList
                    title="Tuần này"
                    startTime={endTimeToday}
                    palceFun={"assignment next week"}
                />
            </div>
        </div>
    )
};

export default AssignNextWeek;
