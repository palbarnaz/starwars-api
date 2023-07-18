import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { getPerson } from '../../services/api';
import { Person } from '../../types/Person';

const adapter = createEntityAdapter<Person>({
    selectId: (item) => item.name,
});

export const getAllPerson = createAsyncThunk('getPerson', async (numberPerson: string) => {
    const response = await getPerson(`people/${numberPerson}/`);

    return response;
});

const personSlice = createSlice({
    name: 'person',
    initialState: adapter.getInitialState({
        loadingPerson: false,
        error: false,
    }),
    reducers: {
        savePerson: adapter.addOne,

        removePerson: adapter.removeAll,
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPerson.rejected, (state) => {
            state.loadingPerson = false;
            state.error = true;
        });
        builder.addCase(getAllPerson.pending, (state) => {
            state.loadingPerson = true;
        });
        builder.addCase(getAllPerson.fulfilled, (state, action) => {
            adapter.removeAll(state);
            state.loadingPerson = false;
            adapter.setOne(state, action.payload);
        });
    },
});

export default personSlice.reducer;
export const { savePerson, removePerson } = personSlice.actions;

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.person);
