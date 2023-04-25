import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { getFilms, getPerson } from '../../services/api';
import { Person } from '../../types/people';

const adapter = createEntityAdapter<Person>({
    selectId: (item) => item.name,
});

// export const getAllPerson = createAsyncThunk('getPerson', async (numberPerson: string) => {
//     const response = await getPerson(`people/${numberPerson}/`);

//     return response;
// });

// export const getAllFilms = createAsyncThunk('getFilmsPerson', async (url: string) => {
//     const urlFilm = url;
//     const numberFilm = urlFilm.split('films/')[1];
//     const response = await getFilms(`films/${numberFilm}`);

//     return response;
// });

const personSlice = createSlice({
    name: 'person',
    initialState: adapter.getInitialState(),
    reducers: {
        savePerson: adapter.addOne,
        removePerson: adapter.removeAll,
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getAllPerson.fulfilled, (state, action) => {
    //         adapter.removeAll(state);

    //         adapter.setOne(state, action.payload);
    //     });
    // },
});

export default personSlice.reducer;
export const { savePerson, removePerson } = personSlice.actions;

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.person);
