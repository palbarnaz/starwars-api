import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAllPerson, selectAll } from '../store/modules/personReducer';

const Person: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const personRedux = useAppSelector(selectAll);
    useEffect(() => {
        if (id) {
            dispatch(getAllPerson(id));
        }
    }, [id]);

    return (
        <>
            {personRedux.map((item) => {
                return (
                    <>
                        <Typography>Seu nome: {item.name}</Typography>
                        <Typography>Sua criação foi em {item.created}</Typography>
                    </>
                );
            })}
        </>
    );
};

export default Person;
