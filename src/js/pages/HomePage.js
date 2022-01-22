import React from "react";

import './page.scss';

import headerImage from './Fotolia_107797505_L.jpg';
import {Box, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";


export default function WelcomePage() {
  const homePage = {
    display: "flex",
    width: "100%",
    // height: "1000px",
    background: `url(${headerImage})`,
    backgroundRepeat: "no-repeat",

    backgroundSize: "100% ",
    // background

    // border: "red dashed medium",
    paddingBottom: "900px"
  };

  // const styles = {
  //   paperContainer: {
  //     backgroundImage: `url(${headerImage})`
  //   }
  //
  // };

  return (
      <Box className="fa-page">
        <Box style={homePage}>
            <Card sx={{width: "40%", margin: "15px", opacity: "60%"}}>
              {/*<CardHeader*/}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant={"h3"}>Welcome </Typography>
                  <Box>
                    <Typography variant={"body1"}>
                      Munich/Melbourne based software developer with over 20 years experience in Java and Javascript specialising in
                    </Typography>
                  </Box>
                  <Typography variant={"body1"}>
                    <ul>
                      <li>
                        Fullstack and single page applications (SPA) using the latest Javascript frameworks such as reactjs, node.js and the ES6
                        ecosystem.
                      </li>
                      <li>
                        Backend developement in Java and the JEE ecosystem including Spring Boot.
                      </li>
                      <li>
                        Coaching, Business Analysis, Systems Engineering, and developement of Database Systems.
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
                {/*<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>*/}
                {/*  <IconButton aria-label="previous">*/}
                {/*    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}*/}
                {/*  </IconButton>*/}
                {/*  <IconButton aria-label="play/pause">*/}
                {/*    <PlayArrowIcon sx={{ height: 38, width: 38 }} />*/}
                {/*  </IconButton>*/}
                {/*  <IconButton aria-label="next">*/}
                {/*    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}*/}
                {/*  </IconButton>*/}
                {/*</Box>*/}
              </Box>
              {/*<CardMedia*/}
              {/*    component="img"*/}
              {/*    // sx={{ width: 151 }}*/}
              {/*    // image*/}
              {/*    image={headerImage}*/}
              {/*    alt="Live from space album cover"*/}
              {/*/>*/}



              {/*<CardContent>*/}
              {/*<Typography variant={"h3"}>Welcome </Typography>*/}
              {/*<Box>*/}
              {/*  <Typography variant={"body1"}>*/}
              {/*  Munich/Melbourne based software developer with over 20 years experience in Java and Javascript specialising in*/}
              {/*  </Typography>*/}
              {/*</Box>*/}
              {/*<Typography variant={"body1"}>*/}
              {/*<ul>*/}
              {/*  <li>*/}
              {/*    Fullstack and single page applications (SPA) using the latest Javascript frameworks such as reactjs, node.js and the ES6*/}
              {/*    ecosystem.*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    Backend developement in Java and the JEE ecosystem including Spring Boot.*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    Coaching, Business Analysis, Systems Engineering, and developement of Database Systems.*/}
              {/*  </li>*/}
              {/*</ul>*/}
              {/*</Typography>*/}
              {/*</CardContent>*/}
            </Card>
          </Box>

          {/*<div>*/}
          {/*  <img src={headerImage} width={"600px"}/>*/}
          {/*</div>*/}
      </Box>
  );
}
