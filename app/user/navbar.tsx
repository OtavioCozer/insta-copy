import Image from 'next/image'

export default function NavBar(props: {}) {
    return (
        <>
            <div className="flex flex-col border-r h-full items-center gap-8">
                <Image
                    className='my-8'
                    src="/instagram.svg"
                    alt="Instagram Logo"
                    //   className="dark:invert"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/home.svg"
                    alt="Home Logo"
                    //   className="dark:invert"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/look.svg"
                    alt="Look Logo"
                    //   className="dark:invert"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/compass.svg"
                    alt="compass Logo"
                    //   className="dark:invert"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/reels.svg"
                    alt="reels Logo"
                    //   className="dark:invert"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/message.svg"
                    alt="message Logo"
                    //   className="dark:invert"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/heart.svg"
                    alt="heart Logo"
                    //   className="dark:invert"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/create.svg"
                    alt="create Logo"
                    //   className="dark:invert"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/profile.jpg"
                    alt="profile Logo"
                    //   className="dark:invert"
                    width={24}
                    height={24}
                    priority
                    className='rounded-full'
                />

            </div>
        </>
    )
}
