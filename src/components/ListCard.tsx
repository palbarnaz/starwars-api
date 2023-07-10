import { Container, Grid } from '@mui/material';
import React from 'react';

import Card from './Card';

const ListCard: React.FC = () => {
    return (
        <>
            <Grid item xs={12} marginY={10}>
                <Container>
                    <Grid container spacing={2}>
                        <Card />
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};

export default ListCard;
