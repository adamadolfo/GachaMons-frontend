import React, {useState} from "react"
import Logo from '../logo.png'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NavBar = () => {

    



    return (
        <Grid container 
        spacing={0}
        align="center"
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{backgroundColor: "#06070E", marginBottom: "8vh"}}
        >
            <Grid item xs={4}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <img src={Logo} style={{height: "20vh", width: "20vh"}} />
                </Link>
            </Grid>
            <Grid item 
                xs={4}
                textAlign="center"
                >
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <div className="nav-item"> About Format </div>
                </Link>
            </Grid >
            <Grid item 
                xs={4}  
                textAlign="center" >
                <Link to='/details' style={{ textDecoration: 'none' }}>
                    <div className="nav-item"> Teams </div>
                </Link>
            </Grid>
          
    
        </Grid>
    )
}

export default NavBar