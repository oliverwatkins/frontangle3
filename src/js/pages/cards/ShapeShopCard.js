import React from "react";

import "../page.scss"

import ImageGallery from "react-image-gallery";
import c1 from "../shapeshop/img/ss1.png";
import c2 from "../shapeshop/img/ss2.png";
import c3 from "../shapeshop/img/ss3.png";
import c4 from "../shapeshop/img/ss4.png";
import c5 from "../shapeshop/img/ss5.png";
import c6 from "../shapeshop/img/ss6.png";
import c7 from "../shapeshop/img/ss7.png";
import {Trans} from "react-i18next";


export default function ShapeShopCard() {

    return (
        <>
            <div className={"previous-work-description"}>
                <p>
                    <Trans i18nKey="previous-ss"/>

                {/*    Shape Shop is an ecommerce platform in developement that allows small and medium sized companies to administer their product catalog. A white labelling solution*/}
                {/*exists for developing customized public facing websites.*/}
                    <ul>
                    <li>React</li>
                    <li>Redux middleware</li>
                    <li>Typescript</li>
                    <li>Hooks</li>
                    <li>Material UI</li>
                    <li>Testing with Enzyme and Jest</li>
                    <li>Spring Boot</li>
                    <li>MySQL</li>
                    <li>all running on the Azure Cloud</li>
                </ul>
                </p>
            </div>
            <div className={"boxy"}>
                <ImageGallery id="ImageGallery" items={someInterestingImages}/>
            </div>
        </>
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