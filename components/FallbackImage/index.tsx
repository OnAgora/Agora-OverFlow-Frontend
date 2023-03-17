import React, { useEffect, useState } from 'react'

const FallbackImage = ({src, ...rest}) => {
    const [imgSrc, setImgSrc] = useState(src)

    useEffect(() => {
        setImgSrc(src)
    }, [src])

    return (
        <img
            {...rest}
            src={imgSrc ? imgSrc : '/images/not-found.png'}
            onError={() => {
                setImgSrc('/images/not-found.png')
            }}
        />
    )
}

export default FallbackImage