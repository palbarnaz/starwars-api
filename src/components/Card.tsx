import { Grid, Paper, Typography, Zoom } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/peopleReducer';
import { removePerson } from '../store/modules/personReducer';

const Card: React.FC = () => {
    const navigate = useNavigate();
    const charactersRedux = useAppSelector(selectAll);
    const dispatch = useAppDispatch();

    const handleDetail = (url: string) => {
        const id = url.split('people/')[1];
        if (charactersRedux) {
            dispatch(removePerson());
        }
        navigate(`/detail/${id}`);
    };
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    {charactersRedux.map((person) => {
                        return (
                            <Grid key={person.name} item display="flex" justifyContent="center" xs={12} sm={6} md={4} lg={3}>
                                <Paper
                                    onClick={() => handleDetail(person.url)}
                                    elevation={0}
                                    sx={{
                                        backgroundColor: '#000000a9 ',
                                        width: '250px',
                                        height: '350px',
                                        cursor: 'pointer',

                                        ':hover': {
                                            opacity: ' 0.8',
                                        },
                                    }}
                                >
                                    <Grid container height="100%" display="flex" alignContent="space-around" textAlign="center">
                                        <Grid item xs={12}>
                                            <Typography variant="h5" sx={{ fontFamily: 'sans-serif', color: 'white', fontSize: '30px' }}>
                                                {person.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <img width="170px" height="180x" src="./images/logoo.png" alt="" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" sx={{ color: 'white' }}>
                                                Saiba mais
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default Card;
