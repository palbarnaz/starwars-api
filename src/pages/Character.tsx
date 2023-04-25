import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAll as selectAllPeople } from '../store/modules/peopleReducer';
import { savePerson, selectAll } from '../store/modules/personReducer';
import { Person } from '../types/people';

const Character: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const people = useAppSelector(selectAllPeople);
    const personRedux = useAppSelector(selectAll);
    useEffect(() => {
        if (id) {
            const objPerson = people.find((item: Person) => item.name === id);
            if (objPerson) {
                dispatch(savePerson(objPerson));
            }
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

export default Character;
