import react from "react"

import { Grid } from '@material-ui/core';

const PacksPage = () => {


    return (
        <Grid 
        container
        direction="row"
        spacing={8}
        justify="center" 
        >
            <Grid item>
                <div> this is a pack </div>
            </Grid>
            <Grid item>
                <div> this is a pack </div>
            </Grid>
            <Grid item>
                <div> this is a pack </div>
            </Grid>
            <Grid item>
                <div> this is a pack </div>
            </Grid>
            <Grid item>
                <div> this is a pack </div>
            </Grid>
        </Grid>
    )
}

export default PacksPage