import React from 'react'
import BackgroundImage  from 'src/components/layout/BackgroundImage'
import OuterWrapper from 'src/components/layout/OuterWrapper'
import Section from 'src/components/layout/Section'
import * as Logos from 'src/components/logos'
import LandingImage from 'src/images/red-alley-long-shot.jpg'
import LandingLogo from 'src/svg/landing-logo.svg'
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

export default function HomePage() {
    return (
        <Section isDark>
            <div className="flex flex-col h-screen">
                <div className="flex-1">
                    <BackgroundImage src={LandingImage}>
                        <OuterWrapper className="flex flex-col h-full">
                            <div className="flex flex-1 items-center">
                                <img
                                    src={LandingLogo}
                                    className="w-24 md:w-32 lg:w-1/6 max-w-xs self-start md:self-center mx-auto mt-10 md:m-0"
                                />
                            </div>
                        </OuterWrapper>
                    </BackgroundImage>
                </div>
                <MediaLinks />
            </div>
        </Section>
    )
}
