import React from 'react'
import classNames from 'classnames'

export const CENTER = 'center';
export const LEFT = 'left';

export default function BackgroundImage({
    src,
    position,
    children,
}) {
    return (
        <div
            style={{ backgroundImage: `url(${src})` }}
            className={classNames(
                'bg-cover',
                'lg:bg-contain',
                'bg-no-repeat',
                'w-full',
                'h-full', {
                'bg-center': position === CENTER,
                'bg-left': position === LEFT,
            })}
        >
            {children}
        </div>
    )
}

BackgroundImage.defaultProps = {
    position: CENTER,
};
