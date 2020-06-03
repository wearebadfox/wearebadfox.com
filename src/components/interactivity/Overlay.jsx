import React from 'react'
import { createPortal } from 'react-dom'

const DEFAULT = 'absolute top-0 h-screen w-screen bg-black';

export function Overlay({ children, role, onClick }) {
    return (
        <div className={DEFAULT} onClick={onClick}>
            {children}
        </div>
    );
}

export default function OverlayPortal(props) {
    return createPortal(<Overlay {...props} />, document.getElementById('overlays'));
}
