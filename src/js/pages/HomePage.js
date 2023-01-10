import React from "react";

import './page.scss';

import headerImage from './Fotolia_107797505_L.jpg';
import {Box, Card, CardContent, Typography} from "@mui/material";


export default function WelcomePage() {
    const homePage = {
        display: "flex",
        width: "100%",
        background: `url(${headerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% ",
        paddingBottom: "900px"
    };

    return (
        <Box className="fa-page">
            <Box style={homePage}>
                <Card sx={{width: "40%", margin: "16px", opacity: "60%"}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <CardContent>
                            <Box margin={1}>
                                <Typography variant={"body1"} >
                                    <b>
                                    Munich based Senior Software Developer, Architect, Team Lead, Coach.
                                    </b>
                                </Typography>
                            </Box>
                            <Box margin={1}>
                                <Typography variant={"body1"}>
                                    Started in year 2000 as a Java Developer and have developed strong experience in database design,
                                    software architecture and requirements engineering.
                                </Typography>
                            </Box>
                            <Box margin={1}>
                                <Typography variant={"body1"}>
                                    <b>
                                    Since 2010 I have been freelancing in Germany and have worked across a broad spectrum of companies. Although I am a full stack developer, I am strongly focussed on front end developement,
                                    and have spent a good part of the last ten year working on the web frontend with technologies such as reactjs and node.
                                    </b>
                                </Typography>
                            </Box>
                            <Box margin={1}>
                                <Typography variant={"body1"}>
                                    On the technical side of things I am a strong adherent of clean code, refactoring, testing with high test coverage (both front end and backend).
                                    Mantras that I live by when developing software are "keep it simple" and "less is more"
                                </Typography>
                            </Box>
                            <Box margin={1}>
                                <Typography variant={"body3"}>
                                    My current/ideal stack is <span style={{ color: "blue" }}><b> React + Typescript + Spring Boot + MySql</b></span> on the
                                    <span style={{ color: "blue" }}><b> Azure Cloud</b></span>.
                                </Typography>
                            </Box>




                            {/*<Typography variant={"body1"}>*/}
                            {/*    <ul>*/}
                            {/*        <li>*/}
                            {/*            Fullstack and single page applications (SPA) using the latest Javascript*/}
                            {/*            frameworks such as reactjs, node.js and the ES6*/}
                            {/*            ecosystem.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            Backend developement in Java and the JEE ecosystem including Spring Boot.*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            Coaching, Business Analysis, Systems Engineering, and developement of Database*/}
                            {/*            Systems.*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</Typography>*/}
                        </CardContent>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}
