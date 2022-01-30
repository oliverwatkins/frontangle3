import React from "react";

import "../page.scss"

import ss from "../../../img/shape-shop-admin-1167x846.png"
import {Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography} from "@mui/material";
import {cardColor} from "../PreviousWorkPage";

import {Link, ExpandMore as ExpandMoreIcon} from '@mui/icons-material';
import {ExpandMore} from "./util";

export default function ShapeShopCard() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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