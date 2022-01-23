import React from "react";

import "../page.scss"

import bw from "../../../img/bw_1167x847.png"
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {cardColor} from "../PreviousWorkPage";

export default function BlogCard() {

    return (
        <Card className={"fa-card"}  style={{background: cardColor}}>
            <CardHeader title={"Blog "} subheader={"http://www.blue-walrus.com"}/>

            <CardMedia
                component="img"
                image={bw}
            />
            <CardContent>
                <Typography variant={"body1"}>
                    My blog is where I write about javascript and javascript frameworks, java
                    swing components, projects I am working on, problems i have encountered, and technical
                    reviews.
                </Typography>
            </CardContent>
        </Card>
    );
}