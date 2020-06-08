import React from 'react'

const DEFAULT = 'text-sm text-neutral-600 mb-4';

export default function SideNote({ children }) {
    return <p className={DEFAULT}>{children}</p>;
}
