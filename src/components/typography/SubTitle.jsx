import React from 'react'

const DEFAULT = 'font-white text-lg text-center';

export default function SubTitle({ children }) {
    return <h2 className={DEFAULT}>{children}</h2>;
}
