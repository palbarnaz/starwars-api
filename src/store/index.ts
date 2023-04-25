import { configureStore } from '@reduxjs/toolkit';

import filmsReducer from './modules/filmsReducer';
import peopleReducer from './modules/peopleReducer';
import personReducer from './modules/personReducer';

export const store = configureStore({
    reducer: {
        people: peopleReducer,
        person: personReducer,
        films: filmsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
