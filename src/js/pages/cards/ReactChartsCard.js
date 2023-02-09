import React from "react";

import "../page.scss"
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import bw from "../../../img/react-charts-1167-846.jpg";
import {cardColor} from "./old/PreviousWorkPage";

export default function ReactChartsCard() {
    return (

<>
    <div className={"previous-work-description"}>
        <p>
        My charting application is a continuous 'work in progress' written
        entirely in react-JS along
        with some third party components <b>[NOTE: Currently Out of Date]</b>
        </p>
    </div>
    <img id={"react-charts-img"} src={bw} alt={"screen shot of react charts"}/>
</>


        // <Card className={"fa-card"} style={{background: cardColor}}>
        //     <CardHeader
        //         title={"Simple Charting Application "} subheader={"charting application written in react-js"}
        //     >
        //         http://www.blue-walrus.com Blog</CardHeader>
        //     <CardMedia
        //         component="img"
        //         // height="440"
        //         image={bw}
        //     />
        //     <CardContent>
        //         <Typography variant={"body1"}></Typography>
        //     </CardContent>
        // </Card>
    );
}