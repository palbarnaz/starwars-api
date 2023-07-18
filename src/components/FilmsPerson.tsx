import { Box, Chip, Grid, Typography } from '@mui/material';
import React from 'react';

import { Films } from '../types/Films';

interface FilmsPersonProps {
    films: Films[];
}

const FilmsPerson: React.FC<FilmsPersonProps> = ({ films }) => {
    return (
        <>
            <Grid container item display="flex" justifyContent="center" alignItems="center">
                <Grid item textAlign="center" xs={12}>
                    <Typography color="grey" variant="subtitle1">
                        Films:
                    </Typography>
                </Grid>
                <Box margin={3} display="flex" justifyContent="center" flexWrap="wrap" alignItems="center" gap={0.7}>
                    {films.map((film: Films) => {
                        return <Chip key={film.title} sx={{ background: 'grey', color: 'white' }} label={film.title} />;
                    })}
                </Box>
            </Grid>
        </>
    );
};

export default FilmsPerson;
