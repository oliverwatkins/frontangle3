import React from "react";

import "../page.scss"

import ss from "../../../img/shape-shop-admin-1167x846.png"
import {Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography} from "@mui/material";
import {cardColor} from "../PreviousWorkPage";

import {Link, ExpandMore as ExpandMoreIcon} from '@mui/icons-material';
import {ExpandMore} from "./util";
import ImageGallery from "react-image-gallery";
import c1 from "../shapeshop/img/ss1.png";
import c2 from "../shapeshop/img/ss2.png";
import c3 from "../shapeshop/img/ss3.png";
import c4 from "../shapeshop/img/ss4.png";
import c5 from "../shapeshop/img/ss5.png";
import c6 from "../shapeshop/img/ss6.png";
import c7 from "../shapeshop/img/ss7.png";


export default function ShapeShopCard2() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        // <Card className={"fa-card"}  style={{background: cardColor}}>
        //     <CardHeader title={"Shape Shop"} subheader={"http://www.frontangle.com/#/TODO/"}/>
        //     <CardContent>
        //
        //         <ImageGallery id="ImageGallery" items={someInterestingImages}/>
        //
        //         <Typography variant={"body1"}>
        //             Shape Shop is an ecommerce platform in developement that allows small and medium sized companies to administer their product catalog. A white labelling solution
        //             exists for developing customized public facing websites.
        //         </Typography>
        //     </CardContent>
        // </Card>


            <Card className={"fa-card"}  style={{background: cardColor}}>
                <CardHeader title={"Shape Shop"} subheader={"" +
                    "Shape Shop is an ecommerce platform in developement that allows small and medium sized companies to administer their product catalog. A white labelling solution " +
                    "exists for developing customized public facing websites."

                }/>
                <CardContent>

                    <ImageGallery id="ImageGallery" items={someInterestingImages}/>

                    <Typography variant={"body1"}>

                    </Typography>
                </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Link />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Front End</Typography>
                    <Typography paragraph>

                        <ul>
                            <li>React</li>
                            <li>Redux middleware</li>
                            <li>Typescript</li>
                            <li>Hooks</li>
                            <li>Material UI</li>
                            <li>Testing with Enzyme and Jest</li>
                        </ul>

                    </Typography>
                    <Typography paragraph>
                        Backend
                    </Typography>
                    <Typography paragraph>
                        <ul>
                            <li>Spring Boot</li>
                            <li>JPA</li>
                            <li>Token authorization</li>
                            <li>Docker</li>
                            <li>Testing with JUnit and in memory database</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

const someInterestingImages = [

    {
        original: c3,
        thumbnail: c3,
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
        original: c1,
        thumbnail: c1,
    },
    {
        original: c2,
        thumbnail: c2,
    },
    // {
    //     original: c8,
    //     thumbnail: c8,
    // },
    // {
    //     original: c9,
    //     thumbnail: c9,
    // },
    // {
    //     original: c10,
    //     thumbnail: c10,
    // },
    // {
    //     original: c11,
    //     thumbnail: c11,
    // },
    // {
    //     original: c12,
    //     thumbnail: c12,
    // },
    // {
    //     original: c13,
    //     thumbnail: c13,
    // },
    // {
    //     original: c17,
    //     thumbnail: c17
    // },
    // {
    //     original: c18,
    //     thumbnail: c18
    // }
]