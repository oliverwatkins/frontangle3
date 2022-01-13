import React from "react";

// import './CodesamplesPanel.less';

import request from 'superagent';


import samplesFile from './samples/samples.json'

export default function DetailPanel(props) {

debugger;
    // let htmlToLoad = props.samples && (props.samples.fileName);

    let h2;
    // try {
    //     h2 = require("./samples/" + htmlToLoad + ".html")
    // } catch (e) {
    //     console.error(e)
    // }
    let bottomStyle = {
        marginTop: 30,
    }

    let imgStyle = {
        width: "400px",
    }
    return (
        <div>
            DetailsPanel

            {props.samples && props.samples.map((elem) => {
                let img;
                try {
                    img = require("./samples/" + elem.fileName + ".PNG")
                    h2 = require("./samples/" + elem.fileName + ".html")


                } catch (e) {
                    console.error(e)
                }


                return <div id="mainView">asdfasdf

                    {/*tryign to load {h2} */}

                    {/*<img src={img}/>*/}
                    {elem.fileName && <img src={img} style={imgStyle}></img>}
                    {h2.default && <div dangerouslySetInnerHTML={{__html: h2.default}}></div>}

                </div>
            })}
            {/*<div id="mainView" style={bottomStyle}>*/}
            {/*    <img src={"" + pngToLoad} style={imgStyle}/>*/}
            {/*    <div dangerouslySetInnerHTML={{__html: htmlToLoad}}></div>*/}
            {/*</div>*/}
        </div>
    )
}


