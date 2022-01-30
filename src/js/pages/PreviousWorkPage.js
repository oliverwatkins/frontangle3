import React from "react";

import IcebergChartsCard from "./cards/IcebergChartsCard"
import BlogCard from "./cards/BlogCard"
import ReactChartsCard from "./cards/ReactChartsCard"
import {Box, Grid, Typography} from "@mui/material";
import ShapeShopCard from "./cards/ShapeShopCard";
import "./cards/card.scss";

export default function PreviousWorkPage() {
    return (
        <Box className="fa-page">
            <Grid container rowSpacing={3}>
                <Grid item xs={12}>
                    <Box pl={3} pr={3} pt={3}>
                        <Typography variant="body1">
                            <Box pb={2}>
                                For over 20 years and in three cities (Melbourne, London, Munich) I have worked
                                across
                                a diverse cross-section of companies including financial services, telecommunication
                                companies,
                                eCommerce and startups to German household names such as BMW and Lufthansa.
                            </Box>
                        </Typography>
                        <Typography variant="body1">
                            <Box>
                                In my spare time between projects, these are some of the
                                projects I work on.
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ShapeShopCard/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <BlogCard/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ReactChartsCard/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <IcebergChartsCard/>
                </Grid>
            </Grid>
        </Box>
    );
}

export const cardColor = "#6D737723"