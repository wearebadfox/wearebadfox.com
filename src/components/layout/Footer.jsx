import React from 'react'
import parseHtml from 'react-html-parser'
import { OuterWrapper } from 'src/components/layout'
import { Paragraph } from 'src/components/typography'
import FollowUs from 'src/components/social/FollowUs'
import content from 'src/content/global'

export default function Footer() {
    const copyright = content.footer.copyright.replace(':year:', new Date().getFullYear());

    return (
        <footer className="whitespace-pre-wrap">
            <OuterWrapper className="md:flex pt-0 pb-10 md:py-16">
                <div className="flex-1">
                    <Paragraph>
                        {parseHtml(copyright)}
                        <span className="px-2">/</span>
                        {parseHtml(content.footer.credits)}
                    </Paragraph>
                </div>
                <FollowUs />
            </OuterWrapper>
        </footer>
    )
}

