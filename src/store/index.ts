import { configureStore } from '@reduxjs/toolkit';

import filmsReducer from './modules/filmsReducer';
import peopleReducer from './modules/peopleReducer';
import personReducer from './modules/personReducer';
import starshipsReducer from './modules/starshipsReducer';

export const store = configureStore({
    reducer: {
        people: peopleReducer,
        person: personReducer,
        films: filmsReducer,
        starships: starshipsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
