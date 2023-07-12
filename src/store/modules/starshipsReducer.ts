import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { getStarships } from '../../services/api';
import { Starships } from '../../types/Starships';

const adapter = createEntityAdapter<Starships>({
    selectId: (item) => item.name,
});

export const getAllStarships = createAsyncThunk('getStarships', async (starships: Starships[]) => {
    const response = await Promise.all(
        starships.map((url: any) => {
            const urlS = url;
            const numberS = urlS.split('starships/')[1];
            return getStarships(`starships/${numberS}`);
        })
    );

    return response;
});

const starshipsSlice = createSlice({
    name: 'starships',
    initialState: adapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllStarships.fulfilled, (state, action: any) => {
            adapter.setAll(state, action.payload);
        });
    },
});

export default starshipsSlice.reducer;
export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.starships);
