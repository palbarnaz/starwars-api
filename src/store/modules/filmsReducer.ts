import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { getFilms } from '../../services/api';
import { Films } from '../../types/films';

const adapter = createEntityAdapter<Films>({
    selectId: (item) => item.title,
});

export const getAllFilms = createAsyncThunk('getAllFilms', async (url: string) => {
    const urlFilm = url;
    const numberFilm = urlFilm.split('films/')[1];
    const response = await getFilms(`films/${numberFilm}`);
    return response;
});

const filmsSlice = createSlice({
    name: 'films',
    initialState: adapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllFilms.fulfilled, (state, action) => {
            console.log(state, action.payload.title);

            // adapter.setOne(state, action.payload);
        });
    },
});

export default filmsSlice.reducer;

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.films);
