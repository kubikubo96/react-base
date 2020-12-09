import React from "react";
import {getUrlParam} from "../../helper/common";

const withUrlParams = BaseComponent => (props) => {
    const uuid = getUrlParam("uuid");
    const record = getUrlParam("record");
    return (
        <React.Fragment>
            <BaseComponent {...props}
                           uuid={uuid}
                           record={record}/>
        </React.Fragment>
    );
};

export default withUrlParams;
