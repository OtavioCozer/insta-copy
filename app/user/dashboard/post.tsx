'use client'

import Image from 'next/image'

export default function Post({ id }: { id: string }) {
    const imageLoader = ({ src }: { src: string }) => {
        // console.log('post', src)
        return `${document.location.origin}/api/image?id=${src}`
    }

    return (
        <>
            <Image
                loader={imageLoader}
                src={id}
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </>
    )
}
