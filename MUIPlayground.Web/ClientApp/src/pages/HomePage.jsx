import { Button, Grid, TextField } from '@mui/material';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <Grid container>
                <Grid item md={3}></Grid>
                <Grid item md={6}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <TextField label="First Name" fullWidth />
                        </Grid>
                        <Grid item md={12}>
                            <TextField label="Last Name" fullWidth />
                        </Grid>
                        <Grid item md={12}>
                            <TextField label="Age Name" fullWidth />
                        </Grid>
                        <Grid item md={12}>
                            <Button fullWidth color="primary" variant='contained'>Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>




            </Grid>
        </>
    )
}

export default HomePage;