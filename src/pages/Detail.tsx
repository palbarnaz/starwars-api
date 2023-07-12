import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DetailPerson from '../components/DetailPerson';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAllFilms } from '../store/modules/filmsReducer';
import { selectAll as selectAllPerson, getAllPerson } from '../store/modules/personReducer';
import { getAllStarships } from '../store/modules/starshipsReducer';

const Detail: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const personRedux = useAppSelector(selectAllPerson);

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
                <DetailPerson ListPerson={personRedux} />
            </Grid>
        </>
    );
};

export default Detail;
