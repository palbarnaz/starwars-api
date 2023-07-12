import { Box, Card, Container, Grid, Skeleton, Typography } from '@mui/material';
import React from 'react';

const SkeletonDetail: React.FC = () => {
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card
                    sx={{
                        backgroundColor: '#00000069 ',
                        minHeight: '80%',
                        maxWidth: '600px',
                        marginY: '50px',
                    }}
                >
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Grid container display="grid" spacing={1}>
                                <Grid item marginTop="10px" xs={12}>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h1" variant="h1">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
                                    </Typography>
                                </Grid>
                                <Grid display="flex" marginRight="100px" justifySelf="flex-end" item xs={12}>
                                    <Typography component="div" key="h5" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} display="flex">
                            <Grid container justifyContent="center" alignItems="center" sx={{ color: 'white' }}>
                                <Grid item xs={6} md={4}>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h5" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="50%" />
                                    </Typography>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h6" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h5" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="50%" />
                                    </Typography>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h6" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h5" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="50%" />
                                    </Typography>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h6" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h5" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="50%" />
                                    </Typography>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h6" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h5" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="50%" />
                                    </Typography>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h6" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h5" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="50%" />
                                    </Typography>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h6" variant="h5">
                                        <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container item>
                            <Grid item xs={12}>
                                <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h5" variant="h5">
                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" />
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h1" variant="h1">
                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={12}>
                                <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h5" variant="h5">
                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" />
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div" key="h1" variant="h1">
                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>
    );
};

export default SkeletonDetail;
