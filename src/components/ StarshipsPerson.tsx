import { Box, Chip, Grid, Typography } from '@mui/material';
import React from 'react';

import { Starships } from '../types/Starships';

interface StarshipsPersonProps {
    starships: Starships[];
}

const StarshipsPerson: React.FC<StarshipsPersonProps> = ({ starships }) => {
    return (
        <Grid container item display="flex" justifyContent="center">
            {starships.length && (
                <>
                    <Grid item textAlign="center" xs={12}>
                        <Typography color="grey" variant="subtitle1">
                            Starships:
                        </Typography>
                    </Grid>
                    <Box margin={3} display="flex" justifyContent="center" flexWrap="wrap" alignItems="center" gap={0.7}>
                        {starships.map((s: Starships) => {
                            return <Chip key={s.name} sx={{ background: 'grey', color: 'white' }} label={s.name} />;
                        })}
                    </Box>
                </>
            )}
        </Grid>
    );
};

export default StarshipsPerson;
