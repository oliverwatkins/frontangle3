import React from "react";

import IcebergChartsPage from "./IcebergChartsPage"
import BlogCard from "./BlogCard"
import ReactChartsCard from "./ReactChartsCard"
import {Grid, Typography} from "@mui/material";

export default class PreviousWorkPage extends React.Component {
    render() {
        return (
            <div className="fa-page" id="previous-page">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography  variant="body2" gutterBottom>
                            I have worked across a diverse cross-section of companies. From financial trading houses, and
                            ratings companies, during my time in London, to German household names such as BMW and Lufthansa,
                            since I have been living in Munich. I have also worked on eCommerce projects, B2B projects and a
                            number of smaller software companies. In my spare time, these are some of the projects I work on.
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <BlogCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <ReactChartsCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <IcebergChartsPage/>
                    </Grid>
                    <Grid item xs={8}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}