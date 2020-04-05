import React from 'react'
import { DarkThemeProvider } from 'src/context/ThemeContext'
import { BackgroundImage, OuterWrapper, Section } from 'src/components/layout'
import ListenLinks from 'src/components/listen/ListenLinks'
import Background from 'src/images/red-alley-long-shot.jpg'
import LandingLogo from 'src/svg/bad-fox-wiretrap-logo.svg'

function Logo() {
    return (
        <img
            src={LandingLogo}
            className="w-24 md:w-32 lg:w-1/6 max-w-xs self-start md:self-center mx-auto mt-10 md:m-0"
        />
    )
}

export default function LandingSection() {
    return (
        <DarkThemeProvider>
            <Section id="landing" className="h-screen">
                <div className="flex flex-col h-screen">
                    <div className="flex-1">
                        <BackgroundImage
                            src={Background}
                            className="bg-cover lg:bg-contain portrait:bg-cover bg-center w-full h-full"
                        >
                            <OuterWrapper className="flex flex-col h-full">
                                <div className="flex flex-1 items-center">
                                    <Logo />
                                </div>
                            </OuterWrapper>
                        </BackgroundImage>
                    </div>
                    <ListenLinks />
                </div>
            </Section>
        </DarkThemeProvider>
    )
}
