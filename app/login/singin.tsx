'use client'

import styles from './login.module.css'
import { signIn } from 'next-auth/react'

export default function SignIn({ providers, }: any) {
    return (
        <>
            {Object.values(providers).map((provider: any) => (
                <div key={provider.name}>
                    <button className={styles.submitButton} onClick={() => signIn(provider.id, { callbackUrl: '/user/feed' })}>
                        Sign in
                    </button>
                </div>
            ))}
        </>
    )
}
