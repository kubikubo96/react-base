import counterReducer from "../slices/counter/counterSlice";
import drawerOpenReducer from "../slices/drawer/drawerOpenSlice";
import assignmentReducer from "../slices/assignment/assignmentSlice";
import authTokenReducer from "../slices/auth-token/authTokenSlice";
import successNotifyReducer from "../slices/record-plan/successNotifySlice";

export const reducer = {
    counter: counterReducer,
    drawerOpen: drawerOpenReducer,
    calendarNow: assignmentReducer,
    authToken: authTokenReducer,
    successNotify: successNotifyReducer,
};
