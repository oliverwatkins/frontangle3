import React from "react";

import "./page.scss"
import {Card, CardContent, CardMedia} from "@mui/material";
import CardHeader from "react-bootstrap/CardHeader";
import bw from "../../img/react-charts.jpg";

export default class ReactChartsCard extends React.Component {

    render() {
        return (
            <Card className="admin-item-box">
                <CardHeader
                    title={"asdfasdfasdfsdfa "}
                > http://www.blue-walrus.com
                    Blog</CardHeader>
                <CardMedia
                    component="img"
                    height="440"
                    image={bw}
                    // alt={product.imageFilename}
                />
                <CardContent> My React Charting application is a continuous 'work in progress' charting
                    application written entirely in ReactJS along with some third party components
                </CardContent>
            </Card>

            // <div className="blocky-thing" >
            //   <div>
            //     <h4>React Charts</h4>
            //     <p>
            //       <a href="http://www.frontangle.com/reactCharts/#/">
            //         My React Charting application </a> is a continuous 'work in progress' charting
            //         application written entirely in ReactJS along with some third party components
            //     </p>
            //   </div>
            //   <div id="react-charts"></div>
            // </div>
        );
    }
}