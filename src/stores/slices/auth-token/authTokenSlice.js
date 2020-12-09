import {createSlice} from "@reduxjs/toolkit";

export const authTokenSlide = createSlice({
    name: 'authToken',
    initialState: {
        value: ""
    },
    reducers: {
        setAuthToken: (state, action) => {
            state.value = action.payload
        }
    }
});

export const {setAuthToken} = authTokenSlide.actions;
export const selectAuthToken = state => state.authToken.value;
export default authTokenSlide.reducer;

