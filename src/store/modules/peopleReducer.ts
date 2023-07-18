import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { getPeople } from '../../services/api';
import { Person } from '../../types/Person';

const adapter = createEntityAdapter<Person>({
    selectId: (item) => item.name,
});

type GetAllThunk = {
    numberPage: number;
    filter?: string;
};

export const getAllPeople = createAsyncThunk('getAll', async ({ numberPage, filter }: GetAllThunk) => {
    let params = `?page=${numberPage}`;
    params += filter !== undefined ? `&search=${filter}` : '';

    const response = await getPeople(`people/${params}`);

    return response;
});

const peopleSlice = createSlice({
    name: 'people',
    initialState: adapter.getInitialState({
        currentPage: 1,
        nextPage: '',
        previousPage: '',
        loading: false,
        error: false,
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
        builder.addCase(getAllPeople.rejected, (state) => {
            state.error = true;
            state.loading = false;
        });
        builder.addCase(getAllPeople.pending, (state) => {
            state.loading = true;
            state.nextPage = '';
            state.previousPage = '';
        });
        builder.addCase(getAllPeople.fulfilled, (state, action) => {
            state.nextPage = action.payload.next;
            state.previousPage = action.payload.previous;
            state.loading = false;

            adapter.setAll(state, action.payload.results);
        });
    },
});

export default peopleSlice.reducer;
export const { decrementar, incrementar } = peopleSlice.actions;
export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.people);
