import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import parseHtml from 'react-html-parser'

const DEFAULT = 'font-light text-sm text-center text-neutral-600 m-6';
const SEPARATOR = 'mx-2';

function Separator() {
    return <span className={SEPARATOR}>/</span>;
}

export default function Footer() {
    const { site } = useStaticQuery(
        graphql`
            query FooterData {
                site {
                    siteMetadata {
                        copyright
                        development
                        credits
                    }
                }
            }
        `
    );

    return (
        <footer className={DEFAULT}>
            {parseHtml(site.siteMetadata.copyright)}
            <Separator />
            {parseHtml(site.siteMetadata.development)}
            <Separator />
            {parseHtml(site.siteMetadata.credits)}
        </footer>
    );
}
