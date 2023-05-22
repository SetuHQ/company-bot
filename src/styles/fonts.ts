import { css } from "styled-components";

import IbmPlexSansRegular from "../assets/fonts/ibm-plex-sans/ibm-plex-sans-regular.woff";
import IbmPlexSans600 from "../assets/fonts/ibm-plex-sans/ibm-plex-sans-600.woff";

import IbmPlexMonoRegular from "../assets/fonts/ibm-plex-mono/ibm-plex-mono-regular.woff";
import IbmPlexMono600 from "../assets/fonts/ibm-plex-mono/ibm-plex-mono-600.woff";

import IbmPlexSerifRegular from "../assets/fonts/ibm-plex-serif/ibm-plex-serif-regular.woff";
import IbmPlexSerifItalic from "../assets/fonts/ibm-plex-serif/ibm-plex-serif-italic.woff";
import IbmPlexSerif600 from "../assets/fonts/ibm-plex-serif/ibm-plex-serif-600.woff";
import IbmPlexSerif600Italic from "../assets/fonts/ibm-plex-serif/ibm-plex-serif-600italic.woff";

export const FontsStyled = css`
    @font-face {
        font-family: "IBM Plex Sans";
        src: url(${IbmPlexSansRegular}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        src: url(${IbmPlexSans600}) format("woff");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "IBM Plex Mono";
        src: url(${IbmPlexMonoRegular}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "IBM Plex Mono";
        src: url(${IbmPlexMono600}) format("woff");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "IBM Plex Serif";
        src: url(${IbmPlexSerifRegular}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "IBM Plex Serif";
        src: url(${IbmPlexSerifItalic}) format("woff");
        font-weight: 400;
        font-style: italic;
    }

    @font-face {
        font-family: "IBM Plex Serif";
        src: url(${IbmPlexSerif600}) format("woff");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "IBM Plex Serif";
        src: url(${IbmPlexSerif600Italic}) format("woff");
        font-weight: 600;
        font-style: italic;
    }
`;
