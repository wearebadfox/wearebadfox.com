import React from 'react'

const DEFAULT = 'text';

export default function Label({ name, children }) {
    return (
        <h3 className={DEFAULT} htmlFor={name}>

        </h3>
    );
}
