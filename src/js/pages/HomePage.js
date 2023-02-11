import React from "react";

import './page.scss';
import './homePage.scss';
import {Trans} from "react-i18next";
import { useTranslation } from 'react-i18next';

export default function HomePage() {



    return (
        <section className="fa-page fa-page-home">
            {/*{i18n.language}*/}
            <div className="home-page-info">
                <div className="home-page-image"/>

                <Trans i18nKey="home-blurb"/>
            </div>
        </section>
    );
}
