import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, InputBase, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import starwars from '../images/starwars.png';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/peopleReducer';
import { getAllPerson } from '../store/modules/personReducer';

const ResponsiveAppBar: React.FC = () => {
    const [person, setPerson] = React.useState('');
    const people = useAppSelector(selectAll);
    const navigate = useNavigate();

    const buscarPersonagem = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const exist = people.find((item) => item.name === person);
        if (exist) {
            const { url } = exist;
            const id = url.split('people/')[1];
            navigate(`/person/${id}`);
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
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            fullWidth
                            sx={{ ml: 1, display: 'flex', alignItems: 'center' }}
                            placeholder="Procurar"
                            onChange={(e) => setPerson(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#3a3a3a',
                                ':hover': {
                                    backgroundColor: '#3a3a3a',
                                },
                                mt: 3,
                                mb: 2,
                                paddingLeft: '40px',
                                paddingRight: '40px',
                            }}
                        >
                            buscar
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
