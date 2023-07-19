import axios from 'axios';

import { Films } from '../types/Film';
import { Person } from '../types/Person';
import { Starships } from '../types/Starships';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

type PeopleResponse = {
    next: string;
    previous: string;
    results: Person[];
};

export async function getPeople(url: string) {
    const response = await api.get<PeopleResponse>(url);
    return response.data;
}

export async function getFilms(url: string) {
    const response = await api.get<Films>(url);
    return response.data;
}

export async function getStarships(url: string) {
    const response = await api.get<Starships>(url);
    return response.data;
}

export async function getPerson(url: string) {
    const response = await api.get<Person>(url);
    return response.data;
}
