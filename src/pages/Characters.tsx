import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, FormControl, Grid, IconButton, OutlinedInput, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import ListCard from '../components/ListCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { decrementar, getAllPeople, incrementar, selectAll } from '../store/modules/peopleReducer';

const Characters: React.FC = () => {
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState('');
    const { nextPage, previousPage, currentPage } = useAppSelector((state) => state.people);
    const charactersRedux = useAppSelector(selectAll);

    useEffect(() => {
        if (currentPage) {
            dispatch(getAllPeople({ numberPage: currentPage, filter }));
        }
    }, [currentPage]);

    useEffect(() => {
        const getDebouncePerson = setTimeout(() => {
            const exist = charactersRedux.find((item) => item.name.toLocaleLowerCase() === filter.toLocaleLowerCase());
            dispatch(getAllPeople({ numberPage: 1, filter }));
            console.log(exist);
        }, 1000);

        return () => {
            clearTimeout(getDebouncePerson);
        };
    }, [filter]);

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return (
        <Container>
            <Grid container marginY={6}>
                <Grid item container xs={12}>
                    <Box width="400px">
                        <FormControl fullWidth variant="standard" sx={{ borderRadius: '10px' }}>
                            <OutlinedInput
                                sx={{ backgroundColor: '#0D0D0D', color: 'white', borderRadius: '5px', height: '40px' }}
                                placeholder="Pesquise seu personagem favorito"
                                id="outlined-adornment-password"
                                type="text"
                                onChange={handleFilter}
                                startAdornment={
                                    <IconButton type="submit" sx={{ marginLeft: '10px', color: 'white' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                }
                            />
                        </FormControl>
                    </Box>
                </Grid>
                <ListCard />

                <Grid item display="flex" justifyContent="center" alignItems="center" xs={12}>
                    <IconButton disabled={!previousPage} onClick={() => dispatch(decrementar())}>
                        <ArrowBackIosIcon sx={{ color: 'white' }} fontSize="medium" />
                    </IconButton>
                    <Typography marginX="2px" color="white" variant="h6">
                        {currentPage}
                    </Typography>
                    <IconButton disabled={!nextPage} onClick={() => dispatch(incrementar())}>
                        <ArrowForwardIosIcon fontSize="medium" sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Characters;
