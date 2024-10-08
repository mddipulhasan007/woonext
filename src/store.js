import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "@/slice/cartSlice";
import drawerSlice from "@/slice/drawerSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    drawer: drawerSlice,
  },
});
