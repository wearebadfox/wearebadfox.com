import React from 'react'
import Topbar from 'src/components/sections/Topbar'
import HeroHeader from 'src/components/media/HeroHeader'
import Footer from 'src/components/sections/Footer'

export default function HeroLayout({ children, file, renderHeroHeader }) {
    return (
        <>
            <Topbar />
            <div className="flex flex-col justify-between min-h-screen">
                <HeroHeader file={file}>
                    {renderHeroHeader()}
                </HeroHeader>
                <main>{children}</main>
                <Footer />
            </div>
            <aside id="overlays" />
        </>
    );
}
