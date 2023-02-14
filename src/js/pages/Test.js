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



export default function Test(props) {

    const { heightX, widthX } = useWindowDimensions();
    let width =600
    let height =1600

    let gradientColor1 ="gray"
    let gradientColor2 ="blue"

    let x1 = 200
    let x2 = 400

    let y0 = 200
    let y1 = 570
    let y2 = 1060
    let y3 = 1465
    let y4 = 1600
    // let y5 = 9820
    // let y4 = 350

    let c = 50

    let stroke = 2

    function getPathLeftRight(xFrom, xTo, y) {
        return <path d={`M ${xTo - c} ${y} H ${xFrom + c}`} strokeWidth={`${stroke}`} stroke="url(#paint0_linear_207_14200)"/>;
    }
    function getPathTopDowm(yFrom, yTo, x) {
        return <path d={`M ${x} ${yFrom + c} V ${yTo - c}`} strokeWidth={`${stroke}`} stroke="url(#paint0_linear_207_14200)"/>;
    }
    function downLeft(x, y) {
        return <path d={`M ${x} ${y - c} C ${x} ${y} ${x} ${y} ${x - c} ${y}`} strokeWidth={`${stroke}`}
              stroke="url(#paint0_linear_207_14200)"/>
    }
    function leftDown(x, y) {
        return <path d={`M ${x + c} ${y} C ${x} ${y} ${x} ${y} ${x} ${y + c}`} strokeWidth={`${stroke}`}
                     stroke="url(#paint0_linear_207_14200)"/>
    }
    function downRight(x, y) {
        return <path d={`M ${x} ${y - c} C ${x} ${y} ${x} ${y} ${x + c} ${y}`} strokeWidth={`${stroke}`}
                     stroke="url(#paint0_linear_207_14200)"/>
    }
    function rightDown(x, y) {
        return <path d={`M ${x - c} ${y} C ${x} ${y} ${x} ${y} ${x} ${y + c}`} strokeWidth={`${stroke}`}
                     stroke="url(#paint0_linear_207_14200)"/>
    }
    let svgStyle = {
        position:"absolute",
        top:"0px",
        // border: "3px solid purple",
        zIndex: 1,
        // background: "white",

        width: "100%",
        height: "3200px"
    }

    // width={width} height={length}
    const { height2, width2 } = useWindowDimensions();

    return (
        <div className="svg-test" style={{position:"relative"}}>
            {/*asdfasdfasdfasdfadsfasdf {props.parentWidht} nnn*/}
            {/*<div>{props.children}</div>*/}
            <div>{props.children}</div>
            {/*props.children*/}



            {(props.parentWidht > 1800) &&
            <svg style={svgStyle}

                 preserveAspectRatio="none"
                 viewBox={`0 0 ${width} ${height} `} fill="none" xmlns="http://www.w3.org/2000/svg">
                {getPathTopDowm(y0 - c, y1, x2)}
                {downLeft(x2, y1)}
                {getPathLeftRight(x1, x2, y1)}
                {leftDown(x1, y1)}
                {getPathTopDowm(y1, y2, x1)}
                {downRight(x1, y2)}
                {getPathLeftRight(x1, x2, y2)}
                {rightDown(x2, y2)}
                {getPathTopDowm(y2, y3, x2)}
                {downLeft(x2, y3)}
                {getPathLeftRight(x1, x2, y3)}
                {leftDown(x1, y3)}
                {getPathTopDowm(y3, y4, x1)}
                {/*{downRight(x1, y4)}*/}
                {/*{getPathLeftRight(x1, x2, y4)}*/}
                {/*{rightDown(x2, y4)}*/}
                {/*{getPathTopDowm(y4, y5, x2)}*/}

                {/*<path d={`M ${x1 + c} ${y3} H ${x2 - c}`} strokeWidth={`${stroke}`}*/}
                {/*      stroke="url(#paint0_linear_207_14200)"/>*/}
                <defs>
                    <linearGradient id="paint0_linear_207_14200" x1="8.51253" y1="731.998" x2="308.147" y2="1023.79"
                                    gradientUnits="userSpaceOnUse">

                        <stop stopColor={"red"} className="stop1" offset="0%" stopOpacity={0.1}/>
                        <stop stopColor={"yellow"} className="stop2" offset="50%"  stopOpacity={0.2}/>
                        <stop stopColor={"blue"} className="stop3" offset="100%"  stopOpacity={0.2}/>


                        {/*<stop stopColor={gradientColor1}/>*/}
                        {/*<stop offset="1" stopColor={gradientColor2}/>*/}
                    </linearGradient>
                </defs>
            </svg>}
        </div>
    );
}