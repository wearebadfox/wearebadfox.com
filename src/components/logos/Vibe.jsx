import React from 'react'
import Svg from './Svg'

export default function Vibe(props) {
    // Because of the all caps text, the vi.be logo looks rather big next to any other logo.
    // For that reason, we slightly reduce it by default.
    const height = `calc(${props.height} * 0.8)`;

    return (
        <Svg {...props} height={height} viewBox="0 0 1775 500">
            <g transform="matrix(4.16667,0,0,4.16667,0,0)">
                <rect x="128.033" y="0.169" width="27.731" height="119.831" />
                <path d="M44.68,120L72.411,120L117.093,0.169L86.279,0.169L62.997,67.446C61.285,72.41 59.915,77.546
                    58.546,83.023C57.176,77.546 55.806,72.41 54.095,67.446L30.814,0.169L0,0.169L44.68,120Z"
                />
                <path d="M224.236,120L277.303,120C300.756,120 320.443,106.648 320.443,84.051C320.443,67.788
                    310.171,58.886 299.9,54.607C308.802,49.129 315.479,42.281 315.479,29.613C315.479,11.126
                    300.241,0.169 275.591,0.169L224.236,0.169L224.236,120ZM251.967,45.362L251.967,21.739L275.078,
                    21.739C284.493,21.739 289.801,26.19 289.801,33.38C289.801,40.569 284.493,45.362
                    275.078,45.362L251.967,45.362ZM251.967,97.062L251.967,67.959L276.448,67.959C288.602,67.959
                    293.908,73.95 293.908,82.681C293.908,91.412 288.431,97.062 276.448,97.062L251.967,97.062Z"
                />
                <rect x="176.819" y="93.639" width="26.362" height="26.361" />
                <path d="M337.207,120L425.197,120L425.197,95.692L364.939,95.692L364.939,69.843L419.891,69.843L419.891,
                    46.219L364.939,46.219L364.939,24.479L424.684,24.479L424.684,0.169L337.207,0.169L337.207,120Z"
                />
            </g>
        </Svg>
    )
}

Vibe.defaultProps = Svg.defaultProps;
