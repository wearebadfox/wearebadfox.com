import React from 'react'

const DEFAULT = 'font-caps font-white text-6xl text-center uppercase my-4 sm:my-10';

export default function Title({ children }) {
    return <h1 className={DEFAULT}>{children.split('').join(' ')}</h1>;
}
