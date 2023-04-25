import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import ListCard from '../components/ListCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { decrementar, getAllPeople, incrementar } from '../store/modules/peopleReducer';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const { nextPage, previousPage, currentPage } = useAppSelector((state) => state.people);

    useEffect(() => {
        if (currentPage) {
            dispatch(getAllPeople(currentPage));
        }
    }, [currentPage]);

    // useEffect(() => {
    //     dispatch(getAllFilms('https://swapi.dev/api/films/1/'));
    // }, []);

    return (
        <>
            <Grid container justifyContent="center" marginBottom={10}>
                <Grid item margin={10} xs={12}>
                    <ListCard />
                </Grid>
                <Grid item display="flex" justifyContent="center" xs={12}>
                    <Button
                        sx={{
                            backgroundColor: '#FCE12F',
                            ':hover': {
                                backgroundColor: '#FCE12F',
                            },
                            color: 'black',
                        }}
                        variant="contained"
                        disabled={!previousPage}
                        onClick={() => dispatch(decrementar())}
                    >
                        <ArrowBackIosIcon fontSize="small" />
                    </Button>
                    <Typography marginLeft="10px" marginRight="10px">
                        {currentPage}
                    </Typography>
                    <Button
                        sx={{
                            backgroundColor: '#FCE12F',
                            ':hover': {
                                backgroundColor: '#FCE12F',
                            },
                            color: 'black',
                        }}
                        variant="contained"
                        disabled={!nextPage}
                        onClick={() => dispatch(incrementar())}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
