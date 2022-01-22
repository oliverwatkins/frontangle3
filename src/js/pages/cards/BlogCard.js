import React from "react";

import "../page.scss"

import bw from "../../../img/bw.PNG"
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {cardColor} from "../PreviousWorkPage";

export default function BlogCard() {

    let style = {
        width:"100%",
        height: "567px",
        objectFit: "cover",
        objectPosition: "0% 0%"
    }

    return (
        <Card className={"fa-card"}  style={{background: cardColor}}>
            <CardHeader title={"Blog "} subheader={"http://www.blue-walrus.com"}/>
            <CardMedia>
                <img src={bw} style={style}/>
            </CardMedia>
            <CardContent>
                <Typography variant={"body1"}>
                    My blog is where I write about javascript and javascript frameworks, java
                    swing components, projects I am working on, problems i have encountered, and
                    reviews.
                </Typography>
            </CardContent>
        </Card>
    );
}