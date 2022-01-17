import React from "react";

import "./page.scss"
import {Card, CardContent, CardMedia, CardHeader, Typography} from "@mui/material";
import bw from "../../img/react-charts.jpg";

export default class ReactChartsCard extends React.Component {

    render() {
        return (
            <Card>
                <CardHeader
                    title={"Simple Charting Application "} subheader={"charting application written in react-js"}
                >
                    http://www.blue-walrus.com Blog</CardHeader>
                <CardMedia
                    component="img"
                    height="440"
                    image={bw}
                />
                <CardContent>
                    <Typography variant={"body1"}>My charting application is a continuous 'work in progress' written entirely in react-JS along
                    with some third party components</Typography>
                </CardContent>
            </Card>
        );
    }
}