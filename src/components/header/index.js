import React from "react"
import { Grid, Typography } from "@material-ui/core"

export const Header = () =>{
    return(
        <Grid container >
            <Grid xs={12}>
                <Typography variant = "h4" component = "h4">Basics of react to master</Typography>
            </Grid>
        </Grid>
    )
}