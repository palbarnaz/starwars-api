import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export async function getPeople(url: string) {
    const response = await api.get(url);
    return response.data;
}

export async function getFilms(url: string) {
    const response = await api.get(url);
    return response.data;
}

export async function getStarships(url: string) {
    const response = await api.get(url);
    return response.data;
}

export async function getPerson(url: string) {
    const response = await api.get(url);
    return response.data;
}
