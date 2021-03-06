import React from "react"
import Pack from "./Pack"
import NavBar from "./NavBar"
import { Grid } from '@material-ui/core';

const PacksPage = () => {


    return (
        <>
            <NavBar />
            <div className="pack-section" >Standard Packs</div>
            <Grid 
            container
            direction="row"
            spacing={6}
            justify="center" 
            style={{marginBottom: "1%"}}
            >
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
            </Grid>

            <div className="pack-section" >Type Packs</div>
            <Grid 
            container
            direction="row"
            spacing={6}
            justify="center" 
            style={{marginBottom: "1%"}}
            >
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
            </Grid>

            <div className="pack-section" >Role Packs</div>
            <Grid 
            container
            direction="row"
            spacing={6}
            justify="center" 
            style={{marginBottom: "1%"}}
            >
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid> <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
                <Grid item>
                    <Pack />
                </Grid>
            </Grid>

        </>
    )
}

export default PacksPage