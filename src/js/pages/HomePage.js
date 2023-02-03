import React from "react";

import './page.scss';
import './homePage.scss';

import {Box, Typography} from "@mui/material";


export default function HomePage() {
    return (
        <section className="fa-page">
            <div className="home-page-info">
                <div className="home-page-image"/>
                <p>
                    Hi! I'm Oliver.
                </p>
                <p>
                    Munich based Senior Software Developer, Architect, Team Lead, Coach.
                </p>

                <p>
                    Started in year 2000 as a Java Developer and have developed strong experience in database design,
                    software architecture and requirements engineering.
                </p>

                <p>
                    Since 2010 I have been freelancing in Germany and have worked across a broad spectrum of companies. Although I am a full stack developer, I am strongly focussed on front end developement,
                    and have spent a good part of the last ten year working on the web frontend with technologies such as reactjs and node.
                </p>
                <p>
                    On the technical side of things I am a strong adherent of clean code, refactoring, testing with high test coverage (both front end and backend).
                    Mantras that I live by when developing software are "keep it simple" and "less is more"
                </p>
                <p>
                    My current/ideal stack is <span><b> React + Typescript + Spring Boot + MySql</b></span> on the
                    <span><b> Azure Cloud</b></span>.
                </p>

            </div>

        </section>
    );
}
