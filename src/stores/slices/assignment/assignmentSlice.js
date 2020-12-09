import {createSlice} from "@reduxjs/toolkit";

export const assignmentSlice = createSlice({
    name: 'assignment',
    initialState: {
        value: []
    },
    reducers: {
        setCalendarNow: state => {
            state.value = !state.value
        }
    }
});

export const {setAssignment} = assignmentSlice.actions;
export const selectAssignment = state => state.assignment.value;
export default assignmentSlice.reducer;

