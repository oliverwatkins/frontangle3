import React, {useEffect} from "react";

import './page.scss';
import './previousWorkPage.scss';

import ShapeShopCard from "./cards/ShapeShopCard";
import {Trans, useTranslation} from "react-i18next";
import IcebergChartsCard from "./cards/IcebergChartsCard";
import ReactChartsCard from "./cards/ReactChartsCard";
import BlogCard from "./cards/BlogCard";
import {InView, useInView} from "react-intersection-observer";



export default function Test() {



    let x1 = 200
    let x2 = 350

    let y1 = 450
    let y2 = 820
    let y3 = 1820
    let y4 = 4000
    let y5 = 9820
    // let y4 = 350

    let c = 50

    let stroke = 15

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
    return (
        <div className="svg-test">


            <svg width="500" height="12550" viewBox="0 0 500 12550" fill="none" xmlns="http://www.w3.org/2000/svg">
                {getPathTopDowm(-c, y1, x2)}
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
                {downRight(x1, y4)}
                {getPathLeftRight(x1, x2, y4)}
                {rightDown(x2, y4)}
                {getPathTopDowm(y4, y5, x2)}

                {/*<path d={`M ${x1 + c} ${y3} H ${x2 - c}`} strokeWidth={`${stroke}`}*/}
                {/*      stroke="url(#paint0_linear_207_14200)"/>*/}
                <defs>
                    <linearGradient id="paint0_linear_207_14200" x1="8.51253" y1="731.998" x2="308.147" y2="1023.79"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="red"/>
                        <stop offset="1" stopColor="blue"/>
                    </linearGradient>
                </defs>
            </svg>


        </div>
    );
}