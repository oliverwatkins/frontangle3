import React from "react";

import "../page.scss"

import ss from "../../../img/shape-shop-admin-1167x846.png"
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {cardColor} from "../PreviousWorkPage";

export default function ShapeShopCard() {
    return (
        <Card className={"fa-card"}   style={{background: cardColor}}>
            <CardHeader title={"Shape Shop "} subheader={"E-commerce platform developed for small to medium businesses"}/>
            <CardMedia
                component="img"
                // height="800"
                image={ss}
            />
            <CardContent>
                <Typography variant={"body1"}>
            Shape Shop is an ecommerce platform in developement that allows small and medium sized companies to administer their product catalog. A white labelling solution
                    exists for developing customized public facing websites.
                </Typography>
            </CardContent>
        </Card>
    );
}