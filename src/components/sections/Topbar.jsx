import React from 'react'
import Navigation from 'src/components/sections/Navigation'
import FollowUs from 'src/components/media/FollowUs'

const DEFAULT = 'absolute w-full flex justify-between py-6 px-8 z-20';

export default function Topbar() {
    return (
        <div className={DEFAULT}>
            <Navigation />
            <FollowUs />
        </div>
    );
}
