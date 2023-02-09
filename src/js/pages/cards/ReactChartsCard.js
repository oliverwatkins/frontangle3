import React from "react";

import "../page.scss"
import bw from "../../../img/react-charts-1167-846.jpg";

export default function ReactChartsCard() {
    return (<>
                <div className={"previous-work-description"}>
                    <p>
                    My charting application is a continuous 'work in progress' written
                    entirely in react-JS along
                    with some third party components <b>[NOTE: Currently Out of Date]</b>
                    </p>
                </div>
                <img id={"react-charts-img"} src={bw} alt={"screen shot of react charts"}/>
            </>);
}