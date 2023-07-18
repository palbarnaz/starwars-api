import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { getFilms } from '../../services/api';
import { Films } from '../../types/Films';

const adapter = createEntityAdapter<Films>({
    selectId: (item) => item.title,
});

export const getAllFilms = createAsyncThunk('getFilmsPerson', async (films: Films[]) => {
    const response = await Promise.all(
        films.map((url: any) => {
            const urlFilm = url;
            const numberFilm = urlFilm.split('films/')[1];
            return getFilms(`films/${numberFilm}`);
        })
    );

    return response;
});
const filmsSlice = createSlice({
    name: 'films',
    initialState: adapter.getInitialState({
        loadingFilms: true,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllFilms.pending, (state) => {
            state.loadingFilms = true;
        });
        builder.addCase(getAllFilms.fulfilled, (state, action: any) => {
            adapter.setAll(state, action.payload);
            state.loadingFilms = false;
        });
    },
});

export default filmsSlice.reducer;

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.films);
