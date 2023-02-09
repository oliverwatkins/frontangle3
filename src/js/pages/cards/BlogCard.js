import React from "react";

import "../page.scss"

import bw from "../../../img/bw_1167x847.png"
import {Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography} from "@mui/material";
import {cardColor} from "./old/PreviousWorkPage";

export default function BlogCard() {
    return (
        <>
            <div className={"previous-work-description"}>
                <p>
                    My blog is where I write about javascript and javascript frameworks,
                    java swing components, projects I am working on, problems i have encountered, and technical reviews.
                </p>
            </div>
            <img id={"blog-img"} src={bw} alt={"blog url"}/>

        </>
    );
}