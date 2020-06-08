import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import parseHtml from 'react-html-parser'
import { contact, home } from 'src/routes'
import Menu from 'src/components/icons/Menu'
import OverlayPortal from 'src/components/interactivity/Overlay'
import NavigationLink from 'src/components/sections/NavigationLink'

const DEFAULT = 'h-screen flex items-center px-4 sm:px-32';

function MenuIcon({ isOpen, setIsOpen }) {
    function onClick() {
        setIsOpen(!isOpen);
    }

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <button
            className="appearance-none outline-none-important focus:shadow-outline"
            onClick={onClick}
            onKeyDown={onKeyDown}
        >
            <Menu isOpen={isOpen} />
        </button>
    );
}

export default function Navigation() {
    const navigationEl = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const { site, data } = useStaticQuery(
        graphql`
            query NavigationQuery {
                site {
                    siteMetadata {
                        copyright
                    }
                }
                data: dataJson {
                    home
                    aboutUs
                    contact {
                        title
                    }
                }
            }
        `
    );

    useEffect(() => {
        if (navigationEl) {
            console.log(navigationEl.current.getBoundingClientRect());
        }
    });

    return (
        <div ref={navigationEl}>
            <div className="flex justify-center">
                <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            {isOpen && (
                <OverlayPortal role="navigation">
                    <nav className={DEFAULT}>
                        <div className="flex-1 flex flex-col">
                            <div className="flex flex-col justify-center">
                                <NavigationLink to={home}>{data.home}</NavigationLink>
                                <NavigationLink>{data.aboutUs}</NavigationLink>
                                <NavigationLink to={contact}>{data.contact.title}</NavigationLink>
                            </div>
                            <div className="border-t border-solid border-neutral-600 py-6 mx-6 my-4">
                                {parseHtml(site.siteMetadata.copyright)}
                            </div>
                        </div>
                    </nav>
                </OverlayPortal>
            )}
        </div>
    );
}
