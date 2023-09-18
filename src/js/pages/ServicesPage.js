import React from "react";

import "./contactPage.scss"
import {Trans, useTranslation} from 'react-i18next';

import linkedInLogo from './../../img/link-linkedin.png';
import xingLogo from './../../img/xing.svg';

import "./servicesPage.scss"
import bw from "../../img/laptop.png";


export default function ServicesPage() {

    const { t, i18n } = useTranslation();



    return (
        <section className="fa-page services">
            <div className="services-section" id="frontend">
                <h2>Web Developement</h2>
                <p>
                At Frontangle we offer web developement using the latest web technologies available.
                    <div className={"image"} id={"web-image"}  alt={"web motif"}/>
                    <ul>
                        <li>Single Page Applications.
                            <ul>
                                <li>A complete solution front to back</li>
                                <li>Using the React/Spring Boot/MySQL stack</li>
                                <li>Test automation using tools such as React Testing Library, Jest and Snapshot tests, ensuring <b>high</b> code coverage</li>
                            </ul>
                        </li>
                        <li>
                            Implementation of a e-commerce web store headless solution such as Shopify WIX, and Woocommerce
                        </li>
                        <li>Guidance and implementation of Wordpress solutions</li>
                        <li>Simple static web pages leveraging the best of CSS and HTML5</li>
                    </ul>
                </p>
            </div>

            {/*<div className="services-section" id="system">*/}
            {/*    <h2>Systems Analysis</h2>*/}
            {/*    <p>*/}
            {/*    <div>*/}
            {/*        <div id={"web-image"}  alt={"web motif"}/>*/}
            {/*        <ul>*/}
            {/*            <li>Systems analysis and design using UML</li>*/}
            {/*        </ul>*/}

            {/*    </div>*/}
            {/*    </p>*/}
            {/*</div>*/}
            <div className="services-section" id="database">
                <h2>Systems Analysis and Database Design</h2>
                <p>
                    Database systems are at the core of every software application. They need to be scalable yet robust.
                    <div>
                        <div className={"image"} id={"uml-image"}  alt={"web motif"}/>
                        <ul>
                            <li>Database design using entity diagrams</li>
                            <li>Database developement in the most common relational databases including MySQL, Oracle and Postgres, as well as consulting
                                and recommendations on using next generation "NoSql" databases such as MongoDB and Graph databases such as Neo4J</li>
                            <li>Consulting and coaching </li>
                            <li>SQL optimisation</li>

                        </ul>
                    </div>
                </p>
            </div>
            <div className="services-section" id="coaching">
                <h2>Coaching</h2>
                <p>
                    <div>
                        <div className={"image"} id={"coaching-image"}  alt={"web motif"}/>
                        <ul>
                            <li>Coaching junior developers on the best coding pratises</li>
                            <li>Code reviews</li>
                            <li>Analysing existing code and dependency analysis</li>
                            <li>Suggesting refactoring candidates</li>
                        </ul>
                    </div>
                </p>
            </div>


            {/*<div className="services-section" id="testing">*/}
            {/*    <h2>Testing</h2>*/}
            {/*    <p>*/}
            {/*    <div>*/}
            {/*        <div id={"web-image"}  alt={"web motif"}/>*/}
            {/*        <ul>*/}
            {/*            <li>data</li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*    </p>*/}
            {/*</div>*/}

        </section>
    );
}