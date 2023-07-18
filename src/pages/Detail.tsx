import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import DetailPerson from '../components/DetailPerson';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAllFilms } from '../store/modules/filmsReducer';
import { selectAll as selectAllPerson, getAllPerson } from '../store/modules/personReducer';
import { getAllStarships } from '../store/modules/starshipsReducer';

const Detail: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const personRedux = useAppSelector(selectAllPerson);
    const { error } = useAppSelector((state) => state.person);

    useEffect(() => {
        if (id) {
            dispatch(getAllPerson(id));
        }
    }, [id]);

    useEffect(() => {
        personRedux.map((item) => dispatch(getAllStarships(item.starships)));
        personRedux.map((item) => dispatch(getAllFilms(item.films)));
    }, [personRedux]);

    return (
        <>
            <Grid
                container
                minHeight="100vh"
                width="100vw"
                sx={{
                    backgroundImage: ' url(/images/image-10.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repete',
                }}
            >
                {error ? (
                    <>
                        <Box display="flex" margin={10} width="100%" justifyContent="center" alignItems="center">
                            <Paper
                                sx={{
                                    backgroundColor: '#171717',
                                    padding: '15px',
                                    display: 'grid',
                                }}
                                elevation={24}
                            >
                                <IconButton onClick={() => navigate('/characters')} sx={{ display: 'flex', justifySelf: 'flex-start' }}>
                                    <ArrowBackIcon sx={{ color: 'white' }} fontSize="large" />
                                </IconButton>
                                <ReportGmailerrorredIcon sx={{ color: 'yellow', justifySelf: 'center' }} fontSize="large" />
                                <Typography color="white">Erro ao buscar detalhe do personagem, tente novamente!</Typography>
                            </Paper>
                        </Box>
                    </>
                ) : (
                    <DetailPerson listPerson={personRedux} />
                )}
            </Grid>
        </>
    );
};

export default Detail;
