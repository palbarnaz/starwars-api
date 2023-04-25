import { Button, Card, CardActions, CardContent, Grid, ListItem, Typography } from '@mui/material';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAllFilms } from '../store/modules/filmsReducer';
import { selectAll } from '../store/modules/peopleReducer';
import { Person } from '../types/people';

const ListCard: React.FC = () => {
    const personagens = useAppSelector(selectAll);
    const dispatch = useAppDispatch();

    return (
        <Grid container spacing={4}>
            {personagens.map((person) => {
                return (
                    <Grid item xs={12} sm={6} md={3} key={person.name}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {person.name}
                                </Typography>
                                <Typography variant="body2">Birth year: {person.birth_year}</Typography>

                                <Typography variant="body2"> Homeworld: {person.homeworld}</Typography>
                                <Typography variant="body2"> Eye color: {person.eye_color}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ListCard;
