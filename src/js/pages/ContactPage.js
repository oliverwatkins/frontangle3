import React from "react";

import "./contactPage.scss"
import { useTranslation } from 'react-i18next';



export default function ContactPage() {

    const { t, i18n } = useTranslation();
    // return <h1>{t('Welcome to React')}</h1>
    i18n.changeLanguage("de")


    return (

        <div className="fa-page contact-page">

            <div className="mugshot-image"/>

            {t('Welcome to React')}


            <div className="contact-info">
                <h1>Contact </h1>
                On social media :
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/oliver-watkins-0673b27/"> Linkedin </a>
                    </li>
                    <li>
                        <a href="https://www.xing.com/profile/Oliver_Watkins2"> Xing </a>
                    </li>
                </ul>
                <p/>
                Email : <b>oliver.f.watkins[at]gmail.com</b>
            </div>

            <div className="contact-page-image"/>




        </div>


    );
}