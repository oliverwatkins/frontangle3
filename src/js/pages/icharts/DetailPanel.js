import React from "react";

export default function DetailPanel(props) {

    let h2;
    let bottomStyle = {
        marginTop: 30,
    }

    let imgStyle = {
        width: "400px",
    }
    return (
        <div>
            {props.samples && props.samples.map((elem) => {
                let img;
                try {
                    img = require("./samples/" + elem.fileName + ".PNG")
                    h2 = require("./samples/" + elem.fileName + ".html")
                } catch (e) {
                    console.error(e)
                }
                return <div id="mainView">
                    {elem.fileName && (props.selected === elem.fileName) && <img src={img} style={imgStyle}></img>}
                    {h2.default && (props.selected === elem.fileName) && <div dangerouslySetInnerHTML={{__html: h2.default}}></div>}
                </div>
            })}
        </div>
    )
}


