import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import React from "react";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            // "Welcome to React": "Welcome to React and react-i18next",
            "home-blurb": "" +
                "<p>Hi! I'm Oliver</p>" +
                    "<p>Munich based Senior Software Developer, Architect, Team Lead, Coach.</p>" +
                    "<p>Started in year 2000 as a Java Developer and have developed strong experience in database design, software architecture and requirements engineering.</p> " +
                    "<p>Since 2010 I have been freelancing in Germany and have worked across a broad spectrum of companies. Although I am a full stack developer, I am strongly focussed on front end developement, and have spent a good part of the last ten year working on the web frontend with technologies such as reactjs and node.</p>" +
                "<p>" +
                    "On the technical side of things I am a strong adherent of clean code, refactoring, testing with high test coverage (both front end and backend). Mantras that I live by when developing software are \"keep it simple\" and \"less is more\"" +
                "</p>" +
                "<p>" +
                    "My current/ideal stack is <strong> React + Typescript + Spring Boot + MySql</strong> on the <strong> Azure Cloud</strong>." +
                "</p>",

            "previous-blurb" :
                "<p>For over 20 years and in three cities (Melbourne, London, Munich) I have worked across a diverse cross-section of companies including financial services, telecommunication companies, eCommerce and startups to German household names such as BMW and Lufthansa.</p>" +
                "<p>In my spare time between projects, these are some of the projects I work on.</p>"
        }
    },
    de: {
        translation: {
            "home-blurb": "" +
                "<p>Hallo! Ich bin Oliver</p>" +
                "<p>Münchener Senior Softwareentwickler, Architekt, Teamleiter, Coach.</p>" +
                "<p>Begann im Jahr 2000 als Java-Entwickler und hat umfangreiche Erfahrungen in den Bereichen Datenbankdesign, Softwarearchitektur und Requirements Engineering gesammelt.</p> " +
                "<p>Seit 2010 bin ich freiberuflich in Deutschland tätig und habe in einem breiten Spektrum von Unternehmen gearbeitet. Obwohl ich ein Full-Stack-Entwickler bin, konzentriere ich mich stark auf die Frontend-Entwicklung und habe einen guten Teil der letzten zehn Jahre damit verbracht, am Web-Frontend mit Technologien wie Reactjs und Node zu arbeiten.</p>" +
                "<p>" +
                "Auf der technischen Seite bin ich ein starker Anhänger von Clean Code, Refactoring, Testing mit hoher Testabdeckung (sowohl Frontend als auch Backend). Mantras, nach denen ich lebe, wenn ich Software entwickle, sind „keep it simple“ und „less is more“ " +
                "</p>" +
                "<p>" +
                "Mein aktueller/idealer Stack ist  <strong> React + Typescript + Spring Boot + MySql</strong> in der <strong> Azure Cloud</strong>." +
                "</p>",

            "previous-blurb" :
                "<p>Seit über 20 Jahren und in drei Städten (Melbourne, London, München) habe ich für eine Vielzahl von Unternehmen gearbeitet, darunter Finanzdienstleister, Telekommunikationsunternehmen, E-Commerce und Start-ups bis hin zu bekannten deutschen Namen wie BMW und Lufthansa.</p>" +
                "<p>In meiner Freizeit zwischen den Projekten sind dies einige der Projekte, an denen ich arbeite.</p>"

        }
    }


};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;