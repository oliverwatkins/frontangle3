import React from "react";

import IcebergChartsPage from "./cards/IcebergChartsCard"
import BlogCard from "./cards/BlogCard"
import ReactChartsCard from "./cards/ReactChartsCard"
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import ShapeShopCard from "./cards/ShapeShopCard";
import "./cards/card.scss";

export default class PreviousWorkPage extends React.Component {
    render() {
        return (
            <Box className="fa-page" >
                <Grid container rowSpacing={3}>
                    <Grid item xs={12}
                          // sx={{border: "red dashed medium"}}
                    >
                        {/*<Card>*/}
                            {/*<CardContent>*/}
                        <Box pl={3} pr={3} pt={3}>
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
                        </Box>
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                    </Grid>
                    <Grid item xs={12} md={6}>
                          {/*// sx={{border: "blue dashed medium"}}*/}
                        <ShapeShopCard/>
                    </Grid>
                    {/*<Grid item xs={12} md={6}>*/}
                    {/*    <IcebergChartsPage/>*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} md={6}>
                          {/*// sx={{border: "orange dashed medium"}}*/}
                        <BlogCard/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                          {/*// sx={{border: "pink dashed medium"}}*/}
                        <ReactChartsCard/>
                    </Grid>

                    {/*<Grid item xs={8}>*/}
                    {/*</Grid>*/}
                </Grid>
            </Box>
        );
    }
}

export const cardColor = "#F0E3AF"

// #F0E3AF

//240,227,175