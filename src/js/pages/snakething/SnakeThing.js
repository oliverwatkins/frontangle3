import React, {useEffect} from "react";

import '../page.scss';
import '../previousWorkPage.scss';

export default function SnakeThing(props) {
    let width =600
    let height =4600
    let viewboxHeight =height/2

    let x1 = 200
    let x2 = 400
    let x3 = "wtf"

    let y0 = 0
    let y1 = 750/2
    let y2 = 1750/2
    let y3 = 2750/2
    let y4 = 3750/2

    //curve constant
    let c = 50

    let stroke = 12

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
        width: "100%",
        height: height + "px"
        // height: height + "3600px"
    }

    // width={width} height={length}

    return (
        <div className="svg-test" style={{position:"relative"}}>
            {/*asdfasdfasdfasdfadsfasdf {props.parentWidht} nnn*/}
            {/*<div>{props.children}</div>*/}
            <div>{props.children}</div>
            {/*props.children*/}


{/*x1*/}
{/*            {x1}*/}
{/*            x2*/}
{/*            {x2}*/}
{/*            x3*/}
{/*            {x3}*/}

            {/*{(props.parentWidht > 1800) &&*/}
            {(props.parentWidht > 1200) &&
            <svg style={svgStyle}

                 preserveAspectRatio="none "
                 viewBox={`0 0 ${width} ${viewboxHeight} `} fill="none" xmlns="http://www.w3.org/2000/svg">
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
                {downRight(x1, y4)}

                {getPathLeftRight(x1, x2 - 50 , y4)}

                { <circle cx={x2 - 50} cy={y4} r="50" stroke="black" stroke-width="0"  stroke="url(#paint0_linear_207_14200)" fill="url(#paint0_linear_207_14200)" />}


                {/*{getPathLeftRight(x1, x2 - (x2-x1)/2 , y4)}*/}
                {/*{downRight(x1, y4)}*/}
                {/*{getPathLeftRight(x1, x2, y4)}*/}
                {/*{rightDown(x2, y4)}*/}
                {/*{getPathTopDowm(y4, y5, x2)}*/}

                {/*<path d={`M ${x1 + c} ${y3} H ${x2 - c}`} strokeWidth={`${stroke}`}*/}
                {/*      stroke="url(#paint0_linear_207_14200)"/>*/}
                <defs>
                    <linearGradient id="paint0_linear_207_14200" x1="8.51253" y1="731.998" x2="308.147" y2="3023.79"
                                    gradientUnits="userSpaceOnUse">

                        <stop stopColor={"red"} className="stop1" offset="0%" stopOpacity={0.1}/>
                        <stop stopColor={"yellow"} className="stop2" offset="30%"  stopOpacity={0.2}/>
                        <stop stopColor={"blue"} className="stop3" offset="60%"  stopOpacity={0.2}/>
                        <stop stopColor={"orange"} className="stop3" offset="100%"  stopOpacity={0.2}/>

                        {/*<stop stopColor={gradientColor1}/>*/}
                        {/*<stop offset="1" stopColor={gradientColor2}/>*/}
                    </linearGradient>
                </defs>
            </svg>}
        </div>
    );
}