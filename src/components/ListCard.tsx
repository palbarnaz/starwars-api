import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/peopleReducer';
import Card from './Card';
import SkeletonCards from './SkeletonCards';

const ListCard: React.FC = () => {
    const charactersRedux = useAppSelector(selectAll);
    const { loading } = useAppSelector((state) => state.people);
    return (
        <>
            <Grid item xs={12} marginY={10}>
                <Container>
                    <Grid container spacing={2}>
                        <Container>
                            <Grid container spacing={2}>
                                {loading ? <SkeletonCards /> : charactersRedux.map((person) => <Card key={person.name} character={person} />)}
                            </Grid>
                        </Container>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};

export default ListCard;
