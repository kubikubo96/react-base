import {createSlice} from '@reduxjs/toolkit';

export const drawerOpenSlice = createSlice({
    name: 'drawerOpen',
    initialState: {
        value: false
    },
    reducers: {
        setDrawerOpen: state => {
            state.value = !state.value
        }
    }
});

export const {setDrawerOpen} = drawerOpenSlice.actions;
export const selectDrawerOpen = state => state.drawerOpen.value;
export default drawerOpenSlice.reducer;
