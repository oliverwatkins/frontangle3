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

export const cardColor = "#6D737723"
