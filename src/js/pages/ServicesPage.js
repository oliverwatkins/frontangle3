import React from "react";

import "./contactPage.scss"
import {Trans, useTranslation} from 'react-i18next';
import {InView} from "react-intersection-observer";
import "./servicesPage.scss"



export default function ServicesPage() {

    const {t, i18n} = useTranslation();
    return (
        <section className="fa-page services paragraph-1">
            <InView>
                {({inView, ref, entry}) => {
                    return (
                        <div className={"services-section " + (inView ? "show" : "hidden")} id="frontend" ref={ref}>
                            <ServicesWeb ref={ref} inView={inView}/>
                        </div>
                    )
                }}
            </InView>
            <InView>
                {({inView, ref, entry}) => {
                    return (
                        <div className={"services-section " + (inView ? "show" : "hidden")} id="systems" ref={ref}>
                            <ServicesSystems ref={ref} inView={inView}/>
                        </div>
                    )
                }}
            </InView>
            <InView>
                {({inView, ref, entry}) => {
                    return (
                        <div className={"services-section " + (inView ? "show" : "hidden")} id="coaching" ref={ref}>
                            <ServicesCoaching ref={ref} inView={inView}/>
                        </div>
                    )
                }}
            </InView>
        </section>
    );
}


function ServicesWeb(props) {

    return <>
        <h2>
            <Trans i18nKey="services-web-header"/>
        </h2>
        <p>
            <Trans i18nKey="services-web"/>
            <div className={"image"} id={"web-image"} alt={"web motif"}/>
            <ul>
                <li>
                    <Trans i18nKey="services-web-1"/>

                    <ul>
                        <li>
                            <Trans i18nKey="services-web-1-1"/>
                        </li>
                        <li>
                            <Trans i18nKey="services-web-1-2"/>
                        </li>
                        <li>
                            <Trans i18nKey="services-web-1-3"/>
                        </li>
                    </ul>
                </li>
                <li>
                    <Trans i18nKey="services-web-2"/>
                </li>
                <li>
                    <Trans i18nKey="services-web-3"/>
                </li>
                <li>
                    <Trans i18nKey="services-web-4"/>
                </li>
            </ul>
        </p>
    </>
}

function ServicesSystems() {
    return <>
        <p>
            <h2>
                <Trans i18nKey="services-systems-header"/>
            </h2>
            <Trans i18nKey="services-systems"/>
            <div className={"image"} id={"uml-image"} alt={"web motif"}/>
            <ul>
                <li>
                    <Trans i18nKey="services-systems-1"/>
                </li>
                <li>
                    <Trans i18nKey="services-systems-2"/>
                </li>
                <li>
                    <Trans i18nKey="services-systems-3"/>
                </li>
                <li>
                    <Trans i18nKey="services-systems-4"/>
                </li>
            </ul>
        </p>
    </>;
}

function ServicesCoaching() {
    return <>
        <p>
            <h2>
                <Trans i18nKey="services-coaching-header"/>
            </h2>

            {/*<Trans i18nKey="services-coaching"/>*/}
            <div className={"image"} id={"coaching-image"} alt={"web motif"}/>
            <ul>
                <li>
                    <Trans i18nKey="services-coaching-1"/>
                </li>
                <li>
                    <Trans i18nKey="services-coaching-2"/>
                </li>
                <li>
                    <Trans i18nKey="services-coaching-3"/>
                </li>
                <li>
                    <Trans i18nKey="services-coaching-4"/>
                </li>
            </ul>
        </p>
    </>;
}