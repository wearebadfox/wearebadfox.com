import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import HeroLayout from 'src/components/layouts/HeroLayout'
import { Title, SubTitle, Label, SideNote } from 'src/components/typography'
import { Button, Input, TextArea } from 'src/components/interactivity'

export default function Contact() {
    const { file, data } = useStaticQuery(
        graphql`
            query ContactPageQuery {
                file(relativePath: { eq: "car-shot.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                data: dataJson {
                    contact {
                        title
                        subTitle
                        firstName
                        lastName
                        email
                        message
                        next
                        disclaimer
                    }
                }
            }
        `
    );

    return (
        <HeroLayout
            file={file}
            renderHeroHeader={() => (
                <div className="flex-1 mx-6 my-6 sm:my-0">
                    <Title>{data.contact.title}</Title>
                </div>
            )}
        >
            <SubTitle>{data.contact.subTitle}</SubTitle>
            <form className="my-10 mx-auto max-w-md">
                <Input isFullWidth placeholder={data.contact.firstName} />
                <Input isFullWidth placeholder={data.contact.lastName} />
                <Input isFullWidth placeholder={data.contact.email} />
                <SideNote>{`* ${data.contact.disclaimer}`}</SideNote>
                <Button type="submit">{data.contact.next}</Button>
            </form>
        </HeroLayout>
    );
}
