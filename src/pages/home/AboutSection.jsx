import React from 'react'
import { DarkThemeProvider } from 'src/context/ThemeContext'
import { OuterWrapper } from 'src/components/layout'
import { Paragraph, Title } from 'src/components/typography'
import { Button } from 'src/components/interactivity'
import Background from 'src/images/tunnel.jpg'
import about from 'src/content/about'

export default function AboutSection() {
    return (
        <DarkThemeProvider>
            <section id="#about" className="bg-black text-white text-center md:text-right">
                <div
                    style={{ backgroundImage: `url(${Background})` }}
                    className="bg-none md:bg-contain bg-left--14 bg-no-repeat w-full h-full bg-left"
                >
                    <div className="flex justify-end py-16 xl:py-32">
                        <OuterWrapper className="h-full md:w-3/4 lg:w-2/3">
                            <Title>{about.title}</Title>
                            <Paragraph>{about.shortBio}</Paragraph>
                            <Button>more</Button>
                        </OuterWrapper>
                    </div>
                </div>
            </section>
        </DarkThemeProvider>
    )
}
