import React from 'react'
import { LightThemeProvider } from 'src/context/ThemeContext'
import { OuterWrapper, Section, Footer, BackgroundImage } from 'src/components/layout'
import { Button, Link } from 'src/components/interactivity'
import { DownloadFile } from 'src/components/icons'
import { InputRow, TextInput, TextArea } from 'src/components/input'
import { Title, Heading, SubText, Paragraph } from 'src/components/typography'
import contact from 'src/content/contact'
import Background from 'src/images/pulptuur.jpg'

function Separator() {
    return (
        <div className="bg-gradient-b-wiretrap rounded h-0 md:h-auto w-full md:w-1 md:mx-20 my-12 md:my-0" />
    )
}

export default function ContactSection() {
    return (
        <LightThemeProvider>
            <Section id="contact" className="text-center md:text-left">
                <BackgroundImage
                    src={Background}
                    className="h-full bg-none md:bg-cover bg-left lg:bg-left-12"
                >
                    <div className="bg-gradient-r-transparent-white w-full h-full">
                        <OuterWrapper className="py-24">
                            <Title>{contact.title}</Title>
                            <div className="flex flex-wrap">
                                <div className="flex-1">
                                    <form>
                                        <InputRow>
                                            <TextInput isRequired name="name" />
                                            <TextInput isRequired name="email" />
                                        </InputRow>
                                        <InputRow>
                                            <TextInput isRequired name="subject" />
                                        </InputRow>
                                        <InputRow>
                                            <TextArea isRequired name="message" />
                                        </InputRow>
                                        <InputRow isAutoSized={false}>
                                            <Button type="submit">{contact.send}</Button>
                                            <div className="text-left">
                                                <SubText>{contact.emailPolicy}</SubText>
                                            </div>
                                        </InputRow>
                                    </form>
                                </div>
                                <Separator />
                                <div className="flex justify-center flex-col flex-1">
                                    <Heading>{contact.bookUs.title}</Heading>
                                    <Paragraph className="mb-6">{contact.bookUs.info}</Paragraph>
                                    <div className="flex justify-center md:justify-start">
                                        <Link renderIcon={(props) => (
                                            <DownloadFile {...props} width={32} />
                                        )}>
                                            {contact.bookUs.downloadPressKit}
                                        </Link>
                                        <Link renderIcon={(props) => (
                                            <DownloadFile {...props} width={32} />
                                        )}>
                                            {contact.bookUs.downloadRider}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </OuterWrapper>
                        <Footer />
                    </div>
                </BackgroundImage>
            </Section>
        </LightThemeProvider>
    )
}
