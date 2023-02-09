import React, {useEffect} from "react";

import './page.scss';
import './previousWorkPage.scss';

import ShapeShopCard2 from "./cards/ShapeShopCard2";
import {Trans, useTranslation} from "react-i18next";
import IcebergChartsCard from "./cards/IcebergChartsCard";
import ReactChartsCard from "./cards/ReactChartsCard";
import BlogCard from "./cards/BlogCard";
import {InView, useInView} from "react-intersection-observer";

export default function PreviousWorkPage() {

    // const { ref, inView, entry } = useInView();

    // const { t, i18n } = useTranslation();

    return (
        <section className="fa-page previous-work ">
            <section className="previous-work-top">
                <Trans i18nKey="previous-blurb"/>
            </section>
            <InView>
                {({ inView, ref, entry }) => (
                    <section ref={ref} className={"prev-section  " + (inView ? "show" : "hidden")}>
                        <ShapeShopCard2/>
                    </section>
                )}
            </InView>
            <InView>
                {({ inView, ref, entry }) => (
                    <section ref={ref} className={"prev-section " + (inView ? "show" : "hidden")}>
                        <IcebergChartsCard/>
                    </section>
                )}
            </InView>
            <InView>
                {({ inView, ref, entry }) => (
                    <section  ref={ref} className={"prev-section " + (inView ? "show" : "hidden")}>
                        <ReactChartsCard/>
                    </section>
                )}
            </InView>
            <InView>
                {({ inView, ref, entry }) => (
                    <section  ref={ref} className={"prev-section " + (inView ? "show" : "hidden")}>
                        <BlogCard/>
                    </section>
                )}
            </InView>
        </section>
    );
}

export const cardColor = "#6D737723"
