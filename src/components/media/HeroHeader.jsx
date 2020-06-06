import React from 'react'
import classNames from 'classnames'
import Img from 'gatsby-image'

const DEFAULT = 'min-h-l';
const FULL_PAGE = 'min-h-2xl';

export default function HeroHeader({ isFullPage, file, children }) {
    const conditionalClasses = {
        [DEFAULT]: !isFullPage,
        [FULL_PAGE]: isFullPage,
    };

    return (
        <header className={classNames(conditionalClasses, 'relative sm:min-h-md sm:max-h-lg')}>
            <Img fluid={file.childImageSharp.fluid} className="max-w-6xl mx-auto min-h-md" />
            <div className="w-full h-full absolute top-0 bg-gradient-b-transparent-black flex items-end">
                {children}
            </div>
        </header>
    );
}
