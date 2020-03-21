import React from 'react'
import { DarkThemeProvider } from 'src/context/ThemeContext'
import { OuterWrapper } from 'src/components/layout'
import * as Logos from 'src/components/logos'
import Background from 'src/images/red-alley-long-shot.jpg'
import LandingLogo from 'src/svg/bad-fox-wiretrap-logo.svg'
import media from 'src/content/media'

function MediaLink({ name, url }) {
    const Logo = Logos[name.replace(' ', '')];

    if (! Logo) {
        return null;
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-10 px-4 py-3 text-white hover:text-cherry"
        >
            <Logo height="100%" />
        </a>
    )
}

function MediaLinks() {
    return (
        <ul className="list-none flex flex-wrap justify-center p-3">
            {media.map((media) => (
                <li key={media.name}>
                    <MediaLink {...media} />
                </li>
            ))}
        </ul>
    )
}

export default function LandingSection() {
    return (
        <DarkThemeProvider>
            <section id="#landing" className="bg-black text-white h-screen">
                <div className="flex flex-col h-screen">
                    <div className="flex-1">
                        <div
                            style={{ backgroundImage: `url(${Background})` }}
                            className="bg-cover lg:bg-contain portrait:bg-cover bg-no-repeat bg-center w-full h-full"
                        >
                            <OuterWrapper className="flex flex-col h-full">
                                <div className="flex flex-1 items-center">
                                    <img
                                        src={LandingLogo}
                                        className="w-24 md:w-32 lg:w-1/6 max-w-xs self-start md:self-center mx-auto mt-10 md:m-0"
                                    />
                                </div>
                            </OuterWrapper>
                        </div>
                    </div>
                    <MediaLinks />
                </div>
            </section>
        </DarkThemeProvider>
    )
}
