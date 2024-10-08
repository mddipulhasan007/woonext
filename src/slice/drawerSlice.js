import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    drawerCartVisible: false, // Initial state for the drawer visibility
};

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggleDrawerCart(state) {
            state.drawerCartVisible = !state.drawerCartVisible;
        },
        openDrawerCart(state) {
            state.drawerCartVisible = true;
        },
        closeDrawerCart(state) {
            state.drawerCartVisible = false;
        },
    },
});

export const { toggleDrawerCart, openDrawerCart, closeDrawerCart } = drawerSlice.actions;
export default drawerSlice.reducer;
