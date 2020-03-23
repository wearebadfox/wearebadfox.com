import React, { useContext } from 'react'
import classNames from 'classnames'
import ThemeContext from 'src/context/ThemeContext'
import SocialLink from 'src/components/social/SocialLink'
import content from 'src/content/global'

const DEFAULT = 'flex items-center justify-center mt-6 md:mt-0 text-sm';

export default function FollowUs() {
    const { text, bg } = useContext(ThemeContext);

    return (
        <div className={classNames(DEFAULT, text)}>
            {content.followUs}
            <span className={`w-8 h-px ml-4 mr-2 ${bg}`} />
            {Object.values(content.social).map((media) => (
                <SocialLink {...media} />
            ))}
        </div>
    )
}
