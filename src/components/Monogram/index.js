import classNames from 'classnames'
import { useId } from 'hooks'
import './index.css'

function Monogram({ highlight, className, ...props }) {
    const id = useId()
    const clipId = `monogram-clip-${id}`

    return (
        <svg
            aria-hidden
            className={classNames('monogram', className)}
            width="46"
            height="29"
            viewBox="0 0 256 256"
            {...props}
        >
            <defs>
                <clipPath id={clipId}>
                    <path d="M220,112c0,23.60645-8.293,45.22949-23.35059,60.88672C182.522,187.57522,163.332,196,144,196c-15.45068,0-26.78271-4.17627-34.89453-9.30566l-9.42481,40.05371a11.99957,11.99957,0,1,1-23.36132-5.4961l32-136a11.99957,11.99957,0,1,1,23.36132,5.4961l-16.45361,69.92969C118.72412,164.86135,127.1582,172,144,172c25.56055,0,52-22.44336,52-60A68,68,0,1,0,71.50586,149.86233,12.0002,12.0002,0,0,1,51.583,163.24514,92.00368,92.00368,0,1,1,220,112Z" />
                </clipPath>
            </defs>
            <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
            {highlight && (
                <g clipPath={`url(#${clipId})`}>
                    <rect className="monogram__highlight" width="100%" height="100%" />
                </g>
            )}
        </svg>
    )
}

export default Monogram
