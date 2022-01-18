import React from "react";

import "../page.scss"

import ss from "../../../img/shape-shop-admin.PNG"
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

export default function ShapeShopCard() {
    return (
        <Card className={"fa-card"}>
            <CardHeader title={"Shape Shop "} subheader={"E-commerce platform developed for small to medium businesses"}/>
            <CardMedia
                component="img"
                // height="800"
                image={ss}
            />
            <CardContent>
                <Typography variant={"body1"}>
                    My blog is where I write about javascript and javascript frameworks, java
                    swing components, projects I am working on, problems i have encountered, and
                    reviews.                    My blog is where I write about javascript and javascript frameworks, java
                    reviews.
                </Typography>
            </CardContent>
        </Card>
    );
}