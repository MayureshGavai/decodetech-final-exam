import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./itemsSlice";
import userSlice from "./userSlice";


export const store = configureStore({
    reducer: {
        items : itemsReducer,
        user: userSlice
    }
})