import React, { useContext } from 'react'
import ThemeContext from 'src/context/ThemeContext'
import * as Icons from 'src/components/icons'
import content from 'src/content/global'

function SocialLink({ name, url, isDark }) {
    const Icon = Icons[name.replace(' ', '')];

    if (! Icon) {
        return null;
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block rounded-full h-8 w-8 p-1 mx-1
                ${isDark ? 'text-white' : 'text-black'} hover:text-white focus:text-white 
                hover:bg-gradient-r-cherry-purple focus:bg-gradient-r-cherry-purple`}
        >
            <Icon height="100%" />
        </a>
    )
}

export default function FollowUs() {
    const { isDark } = useContext(ThemeContext);

    return (
        <div className={`flex items-center justify-center mt-6 md:mt-0 text-sm ${isDark ? 'text-white' : 'text-black'}`}>
            {content.followUs}
            <span className={`w-8 h-px ml-4 mr-2 ${isDark ? 'bg-white' : 'bg-black'}`} />
            {Object.values(content.social).map((media) => (
                <SocialLink {...media} isDark={isDark} />
            ))}
        </div>
    )
}
