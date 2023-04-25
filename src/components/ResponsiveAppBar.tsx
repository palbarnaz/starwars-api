import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, InputBase } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import starwars from '../images/starwars.png';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/peopleReducer';
import { selectAll as selectPerson, removePerson } from '../store/modules/personReducer';

const ResponsiveAppBar: React.FC = () => {
    const [person, setPerson] = React.useState('');
    const people = useAppSelector(selectAll);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const personRedux = useAppSelector(selectPerson);

    const buscarPersonagem = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const exist = people.find((item) => item.name === person);
        if (exist) {
            // const { url } = exist;
            // const id = url.split('people/')[1];
            if (personRedux) {
                dispatch(removePerson());
            }

            navigate(`/person/${exist.name}`);
        } else {
            alert('Personagem não encontrado!');
        }
    };

    const handleNavigate = () => {
        navigate('/');
    };
    return (
        <AppBar position="static" sx={{ backgroundColor: '#FCE12F' }}>
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box component="img" src={starwars} width="15%" padding="10px" onClick={handleNavigate} />
                    <Box sx={{ display: 'flex' }} component="form" onSubmit={(e) => buscarPersonagem(e)}>
                        <InputBase
                            fullWidth
                            sx={{ ml: 1, display: 'flex', alignItems: 'center' }}
                            placeholder="Pesquisar personagem"
                            onChange={(e) => setPerson(e.target.value)}
                        />
                        <IconButton type="submit" sx={{ marginLeft: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
