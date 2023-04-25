import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { getPeople } from '../../services/api';
import { Person } from '../../types/people';

const adapter = createEntityAdapter<Person>({
    selectId: (item) => item.name,
});

export const getAllPeople = createAsyncThunk('getAll', async (numberPage: number) => {
    const response = await getPeople(`people/?page=${numberPage}`);
    return response;
});

const peopleSlice = createSlice({
    name: 'people',
    initialState: adapter.getInitialState({
        currentPage: 1,
        nextPage: '',
        previousPage: '',
    }),
    reducers: {
        decrementar: (state) => {
            state.currentPage -= 1;
        },
        incrementar: (state) => {
            state.currentPage += 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPeople.pending, (state) => {
            state.nextPage = '';
            state.previousPage = '';
        });
        builder.addCase(getAllPeople.fulfilled, (state, action) => {
            state.nextPage = action.payload.next;
            state.previousPage = action.payload.previous;

            adapter.setAll(state, action.payload.results);
        });
    },
});

export default peopleSlice.reducer;
export const { decrementar, incrementar } = peopleSlice.actions;
export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.people);