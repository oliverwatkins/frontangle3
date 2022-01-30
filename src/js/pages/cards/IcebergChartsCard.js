import React from "react";

import "../page.scss"

import c1 from "../icharts/samples/TestDataArea_2_Multiple_Layered.PNG"
import c2 from "../icharts/samples/TestDataArea_4_Multiple_Stacked.PNG"
import c4 from "../icharts/samples/TestDataXY_Simple.PNG"
import c5 from "../icharts/samples/TestDataXY_Simple_Series.PNG"
import c6 from "../icharts/samples/TestDataBar_1_Simple.PNG"
import c7 from "../icharts/samples/TestDataBar_2Y.PNG"
import c8 from "../icharts/samples/TestDataBar_4_GradientColor.PNG"
import c9 from "../icharts/samples/TestDataBar_5_PosNegColor.PNG"
import c10 from "../icharts/samples/TestDataBar_FontFun.PNG"
import c11 from "../icharts/samples/TestDataBar_MultiBar_SideBySide.PNG"
import c12 from "../icharts/samples/TestDataBar_MultiBar_Stacked.PNG"

import c13 from "../icharts/samples/TestDataBubble_1_guns.PNG"
import c17 from "../icharts/samples/TestDataGrids_4_alternateGridFillY.PNG"
import c18 from "../icharts/samples/TestDataGrids_5_Gradiant.PNG"
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {cardColor} from "../PreviousWorkPage";

export default function IcebergChartsCard() {
    return (
        <Card className={"fa-card"}  style={{background: cardColor}}>
            <CardHeader title={"Iceberg Charts "} subheader={"http://www.frontangle.com/#/icharts/"}/>
            <CardContent>

                <ImageGallery id="ImageGallery" items={someInterestingImages}/>

                <Typography variant={"body1"}>
                    Iceberg charts is a comprehensive java charting library
                    <a href="/#/icharts"> (Visit the project repository on Github). </a> Some chart examples can be seen
                    here :
                </Typography>
            </CardContent>
        </Card>
    );
}

const someInterestingImages = [
    {
        original: c1,
        thumbnail: c1,
    },
    {
        original: c2,
        thumbnail: c2,
    },
    {
        original: c4,
        thumbnail: c4,
    },
    {
        original: c5,
        thumbnail: c5,
    },
    {
        original: c6,
        thumbnail: c6,
    },
    {
        original: c7,
        thumbnail: c7,
    },
    {
        original: c8,
        thumbnail: c8,
    },
    {
        original: c9,
        thumbnail: c9,
    },
    {
        original: c10,
        thumbnail: c10,
    },
    {
        original: c11,
        thumbnail: c11,
    },
    {
        original: c12,
        thumbnail: c12,
    },
    {
        original: c13,
        thumbnail: c13,
    },
    {
        original: c17,
        thumbnail: c17
    },
    {
        original: c18,
        thumbnail: c18
    }
]