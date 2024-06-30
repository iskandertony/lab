import React from 'react';
import Landing from "../pages/landing/index.jsx";
import English from "../pages/languages/english/index.jsx";
import EnglishTime from "../pages/languages/english-time/index.jsx";
import EnglishWords from "../pages/languages/english-words/index.jsx";
import Challenges from "../pages/challenge/index.jsx";

export default {
    welcomePage: {
        path: "/",
        element: <Landing />, //
        protected: false,
        role: "all",
    },

    english: {
        path: "/english",
        element: <English />, //
        protected: false,
        role: "all",
    },

    englishTime: {
        path: "/english/time",
        element: <EnglishTime />, //
        protected: false,
        role: "all",
    },

    englishWords: {
        path: "/english/words",
        element: <EnglishWords />, //
        protected: false,
        role: "all",
    },

    Challenges: {
        path: "/challenges",
        element: <Challenges />, //
        protected: false,
        role: "all",
    },

};
