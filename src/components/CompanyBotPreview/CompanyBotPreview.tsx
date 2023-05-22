// @ts-nocheck
import React from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Card,
    Tabs,
    Text,
    ExpandableContent,
    Button,
} from "fictoan-react";

import Markdown from "markdown-to-jsx";
import CodeBlockWithCopy from "../CodeBlockWithCopy/CodeBlockWithCopy";
import MainImage from "../MainImage/MainImage";
import Badge from "../Badge/Badge";
import { DocPathStyled } from "../../styles/DocPath.styled";
import { CompanyBotPreviewStyled } from "./CompanyBotPreview.styled";

const getAnchor = (text: string) => text.toLowerCase().replace(/\W/g, "-");

const H1 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
        <h1 id={anchor}>
            <a href={link} className="anchor-link">
                #
            </a>
            {children}
        </h1>
    );
};

const H2 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
        <h2 id={anchor}>
            <a href={link} className="anchor-link">
                #
            </a>
            {children}
        </h2>
    );
};

const H3 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
        <h3 id={anchor}>
            <a href={link} className="anchor-link">
                #
            </a>
            {children}
        </h3>
    );
};

const H4 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
        <h4 id={anchor}>
            <a href={link} className="anchor-link">
                #
            </a>
            {children}
        </h4>
    );
};

const SetuBotPreview = ({ mdx }) => {
    // Heading components with WayPoint

    const components = {
        Row,
        Portion,
        Card,
        Tabs,
        Text,
        ExpandableContent,
        Button,
        Element,
        CodeBlockWithCopy,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        MainImage,
        Badge,
        Heading,
    };

    return (
        <SetuBotPreviewStyled>
            <DocPathStyled>
                <Element as="div" className="markdown-content">
                    <Markdown
                        options={{
                            overrides: {
                                Row: {
                                    component: Row,
                                },
                                Portion: {
                                    component: Portion,
                                },
                                Card: {
                                    component: Card,
                                },
                                Tabs: {
                                    component: Tabs,
                                },
                                Text: {
                                    component: Text,
                                },
                                ExpandableContent: {
                                    component: ExpandableContent,
                                },
                                Button: {
                                    component: Button,
                                },
                                Element: {
                                    component: Element,
                                },
                                CodeBlockWithCopy: {
                                    component: CodeBlockWithCopy,
                                },
                                MainImage: {
                                    component: MainImage,
                                },
                                Badge: {
                                    component: Badge,
                                },
                                Heading: {
                                    component: Heading,
                                },
                                h1: H1,
                                h2: H2,
                                h3: H3,
                                h4: H4,
                            },
                        }}
                    >
                        {mdx}
                    </Markdown>
                </Element>
            </DocPathStyled>
        </SetuBotPreviewStyled>
    );
};

export default SetuBotPreview;
