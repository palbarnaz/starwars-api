import { Films } from './Films';
import { Starships } from './Starships';

export type Person = {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: Films[];
    starships: Starships[];
    url: string;
    created: string;
    edited: string;
};
