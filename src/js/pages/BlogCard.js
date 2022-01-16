import React from "react";

import "./page.scss"

import bw from "./../../img/bw.PNG"
import {Card, CardContent, CardMedia} from "@mui/material";
import CardHeader from "react-bootstrap/CardHeader";

export default class BlogCard extends React.Component {

  render() {
    return (
        <Card className="admin-item-box">
            <CardHeader
                title= {"asdfasdfasdfsdfa "}
            > http://www.blue-walrus.com
                Blog</CardHeader>
            <CardMedia
                component="img"
                height="440"
                image={bw}
                // alt={product.imageFilename}
            />
            <CardContent> My blog is where I write about javascript and javascript frameworks, java
            swing components, projects I am working on, problems i have encountered, and
            reviews.
            </CardContent>
        </Card>
    );
  }
}