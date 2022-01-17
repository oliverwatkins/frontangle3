import React from "react";

import IcebergChartsPage from "./IcebergChartsCard"
import BlogCard from "./BlogCard"
import ReactChartsCard from "./ReactChartsCard"
import {Card, CardContent, Grid, Typography} from "@mui/material";

export default class PreviousWorkPage extends React.Component {
    render() {
        return (
            <div className="fa-page" id="previous-page">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/*<Card>*/}
                            {/*<CardContent>*/}
                                <Typography variant="body1">
                                    I have worked across a diverse cross-section of companies. From financial trading
                                    houses, and
                                    ratings companies, during my time in London, to German household names such as BMW
                                    and Lufthansa,
                                    since I have been living in Munich. I have also worked on eCommerce projects, B2B
                                    projects and a
                                    number of smaller software companies. In my spare time, these are some of the
                                    projects I work on.
                                </Typography>
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <IcebergChartsPage/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <BlogCard/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ReactChartsCard/>
                    </Grid>
                    <Grid item xs={8}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}