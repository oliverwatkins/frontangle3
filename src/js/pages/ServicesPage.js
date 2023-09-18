import React from "react";

import "./contactPage.scss"
import {Trans, useTranslation} from 'react-i18next';

import "./servicesPage.scss"
import useWindowDimensions from "../useWindowDimension";

export default function ServicesPage() {

    const {t, i18n} = useTranslation();

    // const { height, width } = useWindowDimensions();

    return (
        <section className="fa-page services paragraph-1">
            <div className="services-section" id="frontend">
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
            </div>
            <div className="services-section" id="systems">
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
                </div>
                <div className="services-section" id="coaching">
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
            </div>

                {/*"services-web-header": "Web Developement",*/}
                {/*"services-web": "At Frontangle we offer web developement using the latest web technologies available.",*/}
                {/*"services-web-1": "Single Page Applications.",*/}
                {/*"services-web-1-1": "A complete solution front to back",*/}
                {/*"services-web-1-2": "Using the React/Spring Boot/MySQL stack",*/}
                {/*"services-web-1-3": "Test automation using tools such as React Testing Library, Jest and Snapshot tests,*/}
                {/*ensuring high code coverage",*/}
                {/*"services-web-2": "Implementation of a e-commerce web store headless solution such as Shopify WIX, and*/}
                {/*Woocommerce",*/}
                {/*"services-web-3": "Guidance and implementation of Wordpress solutions",*/}
                {/*"services-web-4": "Simple static web pages leveraging the best of CSS and HTML5",*/}


                {/*<p>*/}
                {/*    At Frontangle we offer web developement using the latest web technologies available.*/}
                {/*    <div className={"image"} id={"web-image"} alt={"web motif"}/>*/}
                {/*    <ul>*/}
                {/*        <li>Single Page Applications.*/}
                {/*            <ul>*/}
                {/*                <li>A complete solution front to back</li>*/}
                {/*                <li>Using the React/Spring Boot/MySQL stack</li>*/}
                {/*                <li>Test automation using tools such as React Testing Library, Jest and Snapshot tests,*/}
                {/*                    ensuring <b>high</b> code coverage*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            Implementation of a e-commerce web store headless solution such as Shopify WIX, and*/}
                {/*            Woocommerce*/}
                {/*        </li>*/}
                {/*        <li>Guidance and implementation of Wordpress solutions</li>*/}
                {/*        <li>Simple static web pages leveraging the best of CSS and HTML5</li>*/}
                {/*    </ul>*/}
                {/*</p>*/}

            {/*<div className="services-section" id="systems">*/}
            {/*    <h2>Systems Analysis and Database Design</h2>*/}
            {/*    <p>*/}
            {/*        Database systems are at the core of every software application. They need to be scalable yet robust.*/}
            {/*        <div>*/}
            {/*            <div className={"image"} id={"uml-image"} alt={"web motif"}/>*/}
            {/*            <ul>*/}
            {/*                <li>Database design using entity diagrams</li>*/}
            {/*                <li>Database developement in the most common relational databases including MySQL, Oracle*/}
            {/*                    and Postgres, as well as consulting*/}
            {/*                    and recommendations on using next generation "NoSql" databases such as MongoDB and Graph*/}
            {/*                    databases such as Neo4J*/}
            {/*                </li>*/}
            {/*                <li>Performance optimisation and bottleneck analysis</li>*/}
            {/*                <li>SQL optimisation</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </p>*/}
            {/*</div>*/}



            {/*<div className="services-section" id="coaching">*/}
            {/*    <h2>Coaching</h2>*/}
            {/*    <p>*/}
            {/*        <div>*/}
            {/*            <div className={"image"} id={"coaching-image"} alt={"web motif"}/>*/}
            {/*            <ul>*/}
            {/*                <li>Coaching junior developers on the best coding pratices</li>*/}
            {/*                <li>Code reviews</li>*/}
            {/*                <li>Analysing existing code and dependency analysis</li>*/}
            {/*                <li>Suggesting refactoring candidates</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*</div>*/}
        </section>
    );
}