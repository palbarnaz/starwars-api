import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Card, Chip, CircularProgress, Container, Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/filmsReducer';
import { selectAll as selectAllS } from '../store/modules/starshipsReducer';
import { Person } from '../types/Person';
import StarshipsPerson from './ StarshipsPerson';
import FilmsPerson from './FilmsPerson';
import SkeletonDetail from './SkeletonDetail';
import SummaryPerson from './SummaryPerson';

interface DetailPersonProps {
    listPerson: Person[];
}

const DetailPerson: React.FC<DetailPersonProps> = ({ listPerson }) => {
    const { loadingFilms } = useAppSelector((state) => state.films);
    const { loadingPerson } = useAppSelector((state) => state.person);
    const navigate = useNavigate();
    const starshipsRedux = useAppSelector(selectAllS);
    const filmsRedux = useAppSelector(selectAll);

    return (
        <>
            {loadingPerson || loadingFilms ? (
                <SkeletonDetail />
            ) : (
                listPerson.map((person) => {
                    return (
                        <Container key={person.name} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Card
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.6) ',
                                    minHeight: '80%',
                                    maxWidth: '600px',
                                    marginY: '50px',
                                }}
                            >
                                <IconButton
                                    onClick={() => navigate('/characters')}
                                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                                >
                                    <ArrowBackIcon sx={{ color: 'white' }} fontSize="large" />
                                </IconButton>
                                <Grid container spacing={4}>
                                    <SummaryPerson person={person} />
                                    <FilmsPerson films={filmsRedux} />
                                    <StarshipsPerson starships={starshipsRedux} />
                                </Grid>
                            </Card>
                        </Container>
                    );
                })
            )}
        </>
    );
};

export default DetailPerson;
