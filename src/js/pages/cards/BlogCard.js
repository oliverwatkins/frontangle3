import React from "react";

import "../page.scss"

import bw from "../../../img/bw_1167x847.png"

export default function BlogCard() {
    return (
        <>
            <div className={"previous-work-description"}>
                <p>
                    My blog is where I write about javascript and javascript frameworks,
                    java swing components, projects I am working on, problems i have encountered, and technical reviews.
                </p>
            </div>
            <img className={"boxy"} id={"blog-img"} src={bw} alt={"blog url"}/>


            {/*<div className={"boxy"} >*/}
            {/*    <ImageGallery id="ImageGallery" items={someInterestingImages}/>*/}
            {/*</div>*/}
        </>
    );
}