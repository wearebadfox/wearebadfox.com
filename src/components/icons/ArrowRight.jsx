import React from 'react'
import Svg from 'src/components/logos/Svg'

export default function ArrowRight(props) {
    return (
        <Svg {...props} viewBox="0 0 24 24">
            <path fill="currentColor" d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
        </Svg>
    );
}

ArrowRight.defaultProps = Svg.defaultProps;
