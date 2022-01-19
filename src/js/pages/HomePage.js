import React from "react";

import './page.scss';

import headerImage from './Fotolia_107797505_L.jpg';
import {Box, Typography} from "@mui/material";


export default function WelcomePage() {
  const homePage = {
    display: "flex",
    width: "100%",
  };

  return (
      <Box className="fa-page">
        <Box style={homePage}>
            <Box>
              <Typography variant={"h1"}>Welcome </Typography>
              <Box>
                <Typography variant={"body1"}>
                Munich based software developer with over 20 years experience in Java and Javascript specialising in
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
            </Box>
          </Box>

          <div>
            <img src={headerImage} width={"600px"}/>
          </div>
      </Box>
  );
}
