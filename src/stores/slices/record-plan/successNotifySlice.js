import {createSlice} from '@reduxjs/toolkit';

export const successNotifySlice = createSlice({
    name: 'successNotify',
    initialState: {
        value: false
    },
    reducers: {
        setSuccessNotify: state => {
            state.value = !state.value
        }
    }
});

export const {setSuccessNotify} = successNotifySlice.actions;
export const selectSuccessNotify = state => state.successNotify.value;
export default successNotifySlice.reducer;
