import React from "react";

import "./contactPage.scss"
import {Trans, useTranslation} from 'react-i18next';

import linkedInLogo from './../../img/link-linkedin.png';
import xingLogo from './../../img/xing.svg';


export default function ServicesPage() {

    const { t, i18n } = useTranslation();



    return (
        <section className="fa-page services">

            <div>database services</div>


            <div id="database">
                <p>database</p>
                <div>

                </div>

            </div>

            <div id="frontend">
                <p>frontend</p>
                <div>               </div>
            </div>

            <div id="system">
                <p>system</p>
                <div></div>
            </div>


        </section>
    );
}