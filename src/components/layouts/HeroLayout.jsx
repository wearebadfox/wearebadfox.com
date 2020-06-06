import React from 'react'
import Topbar from 'src/components/sections/Topbar'
import HeroHeader from 'src/components/media/HeroHeader'
import Footer from 'src/components/sections/Footer'

export default function HeroLayout({ children, file, renderHeroHeader }) {
    const isFullPage = typeof children === 'undefined';

    return (
        <>
            <Topbar />
            <div className="flex flex-col justify-between min-h-screen">
                <HeroHeader isFullPage={isFullPage} file={file}>
                    {renderHeroHeader()}
                </HeroHeader>
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
            <aside id="overlays" />
        </>
    );
}
