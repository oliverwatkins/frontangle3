import React, {useEffect} from "react";

import './page.scss';
import './previousWorkPage.scss';

import ShapeShopCard from "./cards/ShapeShopCard";
import {Trans, useTranslation} from "react-i18next";
import IcebergChartsCard from "./cards/IcebergChartsCard";
import ReactChartsCard from "./cards/ReactChartsCard";
import BlogCard from "./cards/BlogCard";
import {InView, useInView} from "react-intersection-observer";

export default function PreviousWorkPage() {

    return (
        <section className="fa-page previous-work ">




            {/*<svg width="500" height="2550" viewBox="0 0 500 2550" fill="none" xmlns="http://www.w3.org/2000/svg">*/}

            {/*    <path d="M 350 0 V 450" strokeWidth="5" stroke="url(#paint0_linear_207_14200)"/>*/}
            {/*    <path d="M 350 400 L 300 450" strokeWidth="5" stroke="url(#paint0_linear_207_14200)"/>*/}
            {/*    <path d="M 350 450 H 200" strokeWidth="5" stroke="url(#paint0_linear_207_14200)"/>*/}

            {/*    <path d="M 200 450 V 820" strokeWidth="5" stroke="url(#paint0_linear_207_14200)"/>*/}
            {/*    <path d="M 200 820 H 350" strokeWidth="5" stroke="url(#paint0_linear_207_14200)"/>*/}
            {/*    <path d="M 350 820 V 1820" strokeWidth="5" stroke="url(#paint0_linear_207_14200)"/>*/}
            {/*    <path d="M 200 1820 H 350" strokeWidth="5" stroke="url(#paint0_linear_207_14200)"/>*/}
            {/*    <defs>*/}
            {/*        <linearGradient id="paint0_linear_207_14200" x1="8.51253" y1="731.998" x2="308.147" y2="1023.79" gradientUnits="userSpaceOnUse">*/}
            {/*            <stop stopColor="red"/>*/}
            {/*            <stop offset="1" stopColor="blue"/>*/}
            {/*        </linearGradient>*/}
            {/*    </defs>*/}
            {/*</svg>*/}














            <section className="previous-work-top">
                <Trans i18nKey="previous-blurb"/>
            </section>
            <InView>
                {({ inView, ref, entry }) => {

                    return (
                        <section ref={ref} className={"prev-section left " + (inView ? "show" : "hidden")}>
                            <ShapeShopCard align={"left"}/>
                        </section>
                    )
                }}
            </InView>
            <InView>
                {({ inView, ref, entry }) => {

                    //TODO get intersection ratio to work
                    // let showMe = false;
                    //
                    // if (entry && (entry.intersectionRatio > 0.5))
                    //     showMe = true;

                    return (
                        <section ref={ref} className={"prev-section right " + (inView ? "show" : "hidden")}>
                            <IcebergChartsCard align={"right"}/>
                        </section>
                    )
                }}
            </InView>
            <InView>
                {({ inView, ref, entry }) => (
                    <section ref={ref} className={"prev-section " + (inView ? "show" : "hidden")}>
                        <ReactChartsCard/>
                    </section>
                )}
            </InView>
            <InView>
                {({ inView, ref, entry }) => (
                    <section ref={ref} className={"prev-section right " + (inView ? "show" : "hidden")}>
                        <BlogCard align={"right"}/>
                    </section>
                )}
            </InView>
        </section>
    );
}