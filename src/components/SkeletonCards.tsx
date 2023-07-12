import { Grid, Paper, Skeleton, Typography } from '@mui/material';
import React from 'react';

const SkeletonCards: React.FC = () => {
    const mockCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            {mockCard.map((item) => (
                <Grid item display="flex" key={item} justifyContent="center" xs={12} sm={6} md={4} lg={3}>
                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: '#000000a9 ',
                            width: '250px',
                            height: '350px',
                            cursor: 'pointer',
                            ':hover': {
                                opacity: ' 0.8',
                            },
                        }}
                    >
                        <Grid container height="100%" display="flex" alignContent="space-around" textAlign="center">
                            <Grid item xs={12}>
                                <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h3" variant="h3">
                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width={190} />
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h1" variant="h1">
                                    <Skeleton sx={{ bgcolor: 'grey.900', borderRadius: '10px' }} variant="rectangular" width={210} height={160} />
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h3" variant="h3">
                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width={110} height={40} />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            ))}
        </>
    );
};

export default SkeletonCards;
