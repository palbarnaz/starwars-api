import { Card, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DetailPerson from '../components/DetailPerson';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAllFilms, selectAll } from '../store/modules/filmsReducer';
import { selectAll as selectAllPerson, getAllPerson } from '../store/modules/personReducer';

const Detail: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const personRedux = useAppSelector(selectAllPerson);
    const filmsRedux = useAppSelector(selectAll);

    useEffect(() => {
        if (id) {
            dispatch(getAllPerson(id));
        }
    }, [id]);

    useEffect(() => {
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
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6) ',
                            minHeight: '80%',
                            maxWidth: '600px',
                            marginY: '50px',
                        }}
                    >
                        <DetailPerson ListPerson={personRedux} ListFilm={filmsRedux} />
                    </Card>
                </Container>
            </Grid>
        </>
    );
};

export default Detail;
