import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import ArrowRight from 'src/components/icons/ArrowRight'

const DEFAULT = classNames(
    'flex justify-between items-center py-3 px-6',
    'bg-black font-bold text-5xl no-underline rounded',
    'group hover:bg-cerise-500 focus:bg-cerise-500 hover:text-white focus:text-white transition-all duration-75',
);
const ARROW = classNames(
    'opacity-0 mr-4',
    'group-hover:opacity-100 group-hover:mr-0 transition-all duration-200',
);

export default function NavigationLink({ to, children }) {
    return (
        <Link to={to} className={DEFAULT}>
            {children}
            <ArrowRight width="2rem" className={ARROW} />
        </Link>
    );
}
