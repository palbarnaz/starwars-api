import { Box, Chip, Grid, Typography } from '@mui/material';
import React from 'react';

import { Films } from '../types/Films';
import { Person } from '../types/Person';

interface DetailPersonProps {
    ListPerson: Person[];
    ListFilm: Films[];
}

const DetailPerson: React.FC<DetailPersonProps> = ({ ListPerson, ListFilm }) => {
    return (
        <>
            {ListPerson.map((person) => {
                return (
                    <Grid key={person.name} container spacing={4}>
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
                                {ListFilm.map((film: Films) => {
                                    return <Chip key={film.title} sx={{ background: 'grey', color: 'white' }} label={film.title} />;
                                })}
                            </Box>
                        </Grid>
                        <Grid container item display="flex" justifyContent="center">
                            <Grid item textAlign="center" xs={12}>
                                <Typography color="grey" variant="subtitle1">
                                    Films:
                                </Typography>
                            </Grid>
                            <Box margin={3} display="flex" justifyContent="center" flexWrap="wrap" alignItems="center" gap={0.7}>
                                {ListFilm.map((film: Films) => {
                                    return <Chip sx={{ background: 'grey', color: 'white' }} key={film.title} label={film.title} />;
                                })}
                            </Box>
                        </Grid>
                    </Grid>
                );
            })}
        </>
    );
};

export default DetailPerson;
