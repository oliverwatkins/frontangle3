import React from "react";

import "./page.scss"

import bw from "./../../img/bw.PNG"
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

export default class BlogCard extends React.Component {

    render() {
        return (
            <Card>
                <CardHeader title={"Blog "} subheader={"http://www.blue-walrus.com"}>
                    <Typography variant={"body1"}>
                    </Typography>
                </CardHeader>
                <CardMedia
                    component="img"
                    height="440"
                    image={bw}
                />
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
}