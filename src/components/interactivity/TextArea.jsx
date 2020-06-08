import React from 'react'
import classNames from 'classnames'
import { DEFAULT, FULL_WIDTH } from 'src/components/interactivity/Input'

export default function TextArea({ isFullWidth, placeholder, rows }) {
    const conditionalClasses = {
        [FULL_WIDTH]: isFullWidth,
    };

    return (
        <textarea
            className={classNames(DEFAULT, conditionalClasses)}
            placeholder={placeholder}
            rows={rows}
        />
    );
}

TextArea.defaultProps = {
    isFullWidth: false,
    placeholder: undefined,
    rows: undefined,
};
