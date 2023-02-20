import React, {useEffect} from "react";


import useWindowDimensions from "../../useWindowDimension";
import SnakeThing from "./SnakeThing";

import demo from "./demo.scss"

export default function DemoPage() {

    const { height, width } = useWindowDimensions();

    return (
        <section className="demo-page ">
            <section className="previous-work-top">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis esse eum facere fugiat illum maxime modi odit placeat, praesentium quibusdam. Eos error et fugiat iusto magni. Culpa earum ex veritatis?
            </section>
            <SnakeThing parentWidht={width}>
                <section className={"demo-box left "}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum quasi repudiandae vel voluptate. Accusamus earum expedita fuga in, iure magnam optio quae veniam vero voluptatum? Aspernatur dolore eius nam.
                </section>
                <section  className={"demo-box right "}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum quasi repudiandae vel voluptate. Accusamus earum expedita fuga in, iure magnam optio quae veniam vero voluptatum? Aspernatur dolore eius nam.

                </section>
                <section className={"demo-box right "}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum quasi repudiandae vel voluptate. Accusamus earum expedita fuga in, iure magnam optio quae veniam vero voluptatum? Aspernatur dolore eius nam.

                </section>

            </SnakeThing>
        </section>
    );
}