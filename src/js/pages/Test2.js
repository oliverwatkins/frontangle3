import React, {useEffect} from "react";

import './page.scss';
import './previousWorkPage.scss';

import ShapeShopCard from "./cards/ShapeShopCard";
import {Trans, useTranslation} from "react-i18next";
import IcebergChartsCard from "./cards/IcebergChartsCard";
import ReactChartsCard from "./cards/ReactChartsCard";
import BlogCard from "./cards/BlogCard";
import {InView, useInView} from "react-intersection-observer";
import useWindowDimensions from "../useWindowDimension";



export default function Test2() {

    let outerDiv = {
        position:"relative",
        border: "3px solid red",
    }

    let svgStyle = {
        position:"absolute",
        top:"0px",
        border: "3px solid pink",
        zIndex: -1,
        // preserveAspectRatio:"none",
        width: "100%",
        height: "200px"
    }
    return (
        <div style={outerDiv}>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, atque aut cupiditate deleniti, dignissimos doloribus, earum error iste iusto nesciunt nulla odio odit quae recusandae repellendus repudiandae tenetur voluptatem.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, atque aut cupiditate deleniti, dignissimos doloribus, earum error iste iusto nesciunt nulla odio odit quae recusandae repellendus repudiandae tenetur voluptatem.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, atque aut cupiditate deleniti, dignissimos doloribus, earum error iste iusto nesciunt nulla odio odit quae recusandae repellendus repudiandae tenetur voluptatem.</div>
            <svg style={svgStyle}
                 viewBox={`0 0 ${600} ${200} `}
                 preserveAspectRatio="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d={`M ${200} ${100} H ${400}`} strokeWidth={12} stroke="blue"/>
            </svg>
        </div>
    );
}
// viewBox={`0 0 ${width} ${height} `}
// preserveAspectRatio="none"