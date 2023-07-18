import { Grid, Typography } from '@mui/material';
import React from 'react';

import { Person } from '../types/Person';

interface SummaryPersonProps {
    person: Person;
}

const SummaryPerson: React.FC<SummaryPersonProps> = ({ person }) => {
    return (
        <>
            <Grid item xs={12}>
                <Grid container display="grid" spacing={1}>
                    <Grid item marginTop="10px" xs={12} textAlign="center">
                        <Typography variant="h3" sx={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: 'white', letterSpacing: '.1rem' }}>
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
        </>
    );
};

export default SummaryPerson;
