import { Box, Card, Chip, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/filmsReducer';
import { selectAll as selectAllS } from '../store/modules/starshipsReducer';
import { Films } from '../types/Films';
import { Person } from '../types/Person';
import { Starships } from '../types/Starships';
import SkeletonDetail from './SkeletonDetail';

interface DetailPersonProps {
    ListPerson: Person[];
}

const DetailPerson: React.FC<DetailPersonProps> = ({ ListPerson }) => {
    const { loading } = useAppSelector((state) => state.films);
    const starshipsRedux = useAppSelector(selectAllS);
    const filmsRedux = useAppSelector(selectAll);

    return (
        <>
            {loading ? (
                <SkeletonDetail />
            ) : (
                ListPerson.map((person) => {
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
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <Grid container display="grid" spacing={1}>
                                            <Grid item marginTop="10px" xs={12} textAlign="center">
                                                <Typography
                                                    variant="h3"
                                                    sx={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: 'white', letterSpacing: '.1rem' }}
                                                >
                                                    {person.name}
                                                </Typography>
                                            </Grid>
                                            <Grid display="flex" marginRight="200px" justifySelf="flex-end" item xs={12}>
                                                <Typography sx={{ color: 'white' }} variant="h5">
                                                    {person.birth_year}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} textAlign="center">
                                        <Grid container justifyContent="center" alignItems="center" sx={{ color: 'white' }}>
                                            <Grid item xs={6} md={4}>
                                                <Typography color="grey" variant="subtitle1">
                                                    Height:
                                                </Typography>
                                                <Typography variant="h6">{person.height}</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                                <Typography color="grey" variant="subtitle1">
                                                    Mass:
                                                </Typography>
                                                <Typography variant="h6">{person.mass}</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                                <Typography color="grey" variant="subtitle1">
                                                    Hair:
                                                </Typography>
                                                <Typography variant="h6">{person.hair_color}</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                                <Typography color="grey" variant="subtitle1">
                                                    Skin:
                                                </Typography>
                                                <Typography variant="h6">{person.skin_color}</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                                <Typography color="grey" variant="subtitle1">
                                                    Eye:
                                                </Typography>
                                                <Typography variant="h6">{person.eye_color}</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                                <Typography color="grey" variant="subtitle1">
                                                    Gender:
                                                </Typography>
                                                <Typography variant="h6">{person.gender}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container item display="flex" justifyContent="center" alignItems="center">
                                        <Grid item textAlign="center" xs={12}>
                                            <Typography color="grey" variant="subtitle1">
                                                Films:
                                            </Typography>
                                        </Grid>
                                        <Box margin={3} display="flex" justifyContent="center" flexWrap="wrap" alignItems="center" gap={0.7}>
                                            {filmsRedux.map((film: Films) => {
                                                return <Chip key={film.title} sx={{ background: 'grey', color: 'white' }} label={film.title} />;
                                            })}
                                        </Box>
                                    </Grid>
                                    <Grid container item display="flex" justifyContent="center">
                                        {starshipsRedux.length && (
                                            <>
                                                <Grid item textAlign="center" xs={12}>
                                                    <Typography color="grey" variant="subtitle1">
                                                        Starships:
                                                    </Typography>
                                                </Grid>
                                                <Box margin={3} display="flex" justifyContent="center" flexWrap="wrap" alignItems="center" gap={0.7}>
                                                    {starshipsRedux.map((s: Starships) => {
                                                        return <Chip key={s.name} sx={{ background: 'grey', color: 'white' }} label={s.name} />;
                                                    })}
                                                </Box>
                                            </>
                                        )}
                                    </Grid>
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
