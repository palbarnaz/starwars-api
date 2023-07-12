import { Typography } from '@mui/material';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Box = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`;

const BoxStyled = () => {
    return (
        <>
            <Box>
                <img width="100px" height="100x" src="./images/droid2.png" alt="" />
                <Typography variant="h5" sx={{ letterSpacing: '.1rem', fontWeight: 'bold', textShadow: 'black 0.1em 0.1em 0.4em' }}>
                    CHARACTERS
                </Typography>
            </Box>
        </>
    );
};

export default BoxStyled;
