import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

const initialState = {
    data: [],
    status: STATUSES.IDLE
}

// Fetch Items Thunk
export const fetchItems = createAsyncThunk('items/fetch', async () => {
    try {
        const res = await fetch('http://localhost:3000/api/items/getitems');
        const data = await res.json(); 
        return data;
    } catch (err) {
        throw new Error('Failed to fetch items'); 
    }
});

// Add New Item Thunk
export const addNewItem = createAsyncThunk('items/post', async (itemData, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:3000/api/items/postitems', itemData);
        return response.data;
    } catch (err) {
        throw new Error('Failed to add new item');
    }
});


export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(addNewItem.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(addNewItem.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.status = STATUSES.IDLE;
            })
            .addCase(addNewItem.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

// Export the slice reducer
export const { reducer: itemsReducer } = itemsSlice;
