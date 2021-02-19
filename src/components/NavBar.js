import React from "react"
import Logo from '../logo.png'
import { Grid } from '@material-ui/core';

const NavBar = () => {


    return (
        <Grid container 
        spacing={0}
        align="center"
        justify="center"
        direction="row"
        >
            <Grid item xs={12}>
                <img src={Logo} style={{height: "20vh", width: "20vh", marginLeft: "20px"}} />
            </Grid>
            <Grid item xs={6}>
                <div className="nav-item"> About Format </div>
            </Grid >
            <Grid item xs={4}>
                <div className="nav-item"> Pack Details </div>
            </Grid>
            
    
        </Grid>
    )
}

export default NavBar