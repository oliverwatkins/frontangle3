import React from "react";

import IcebergChartsCard from "../IcebergChartsCard"
import BlogCard from "../BlogCard"
import ReactChartsCard from "../ReactChartsCard"
import {Box, Grid, Typography} from "@mui/material";
import ShapeShopCard2 from "../ShapeShopCard2";
import {Trans, useTranslation} from "react-i18next";

export default function PreviousWorkPage2() {

    const { t, i18n } = useTranslation();
    return (
        <section className="fa-page">
            <Grid container rowSpacing={3} mt={2}>
                <Grid item xs={12}>
                    <Box pl={3} pr={3}>
                        {/*<Typography variant="body1">*/}
                        <Trans i18nKey="previous-blurb"/>
                        {/*<p>*/}
                        {/*    For over 20 years and in three cities (Melbourne, London, Munich) I have worked*/}
                        {/*    across*/}
                        {/*    a diverse cross-section of companies including financial services, telecommunication*/}
                        {/*    companies,*/}
                        {/*    eCommerce and startups to German household names such as BMW and Lufthansa.*/}
                        {/*</p>*/}
                        {/*<p>*/}
                        {/*    In my spare time between projects, these are some of the*/}
                        {/*    projects I work on.*/}
                        {/*</p>*/}
                        {/*</Typography>*/}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ShapeShopCard2/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <IcebergChartsCard/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ReactChartsCard/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <BlogCard/>
                </Grid>
            </Grid>
        </section>
    );
}

export const cardColor = "#6D737723"