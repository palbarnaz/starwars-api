import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import BoxStyled from '../components/BoxStyled';

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Grid
            container
            height="100vh"
            width="100vw"
            sx={{
                backgroundImage: ' url(/images/backg-home.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repete',
            }}
        >
            <Grid item width="100%">
                <Grid container height="60%" display="flex" flexDirection="column" justifyContent="space-between" alignContent="center">
                    <Grid marginTop={2} display="flex" item>
                        <Box>
                            <img width="190px" height="90x" src="./images/starwarslogo.png" alt="" />
                            <Typography variant="h5" textAlign="center" sx={{ letterSpacing: '.1rem', fontWeight: '100' }}>
                                DISCOVERY
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box
                            onClick={() => navigate('/characters')}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                cursor: 'pointer',
                            }}
                        >
                            <BoxStyled />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
