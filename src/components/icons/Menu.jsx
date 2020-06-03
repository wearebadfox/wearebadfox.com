import React from 'react'
import classNames from 'classnames'
import Svg from 'src/components/logos/Svg'
import 'src/components/icons/Menu.css'

const DEFAULT = 'menu-icon cursor-pointer';
const OPEN = 'is-open';

export default function Menu(props) {
    const { isOpen, className } = props;
    const conditionalClasses = {
        [OPEN]: isOpen,
    };

    return (
        <Svg {...props} viewBox="0 0 100 100" className={classNames(DEFAULT, className, conditionalClasses)}>
            <rect className="bar-1 transition-all duration-150" y="25" width="100" height="8" />
            <rect className="bar-2 transition-all duration-150" y="75" width="100" height="8" />
        </Svg>
    );
}

Menu.defaultProps = {
    ...Svg.defaultProps,
    isOpen: false,
    height: 25,
    width: 25,
};
