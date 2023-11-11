import NavBar from './navbar'
import styles from './user.module.css'
import { auth } from '@/app/api/auth/[...nextauth]/route'
import SignOut from './signout'

export default async function UserLayout({ children, }: { children: React.ReactNode }) {
    const session = await auth()
    console.log(session)
    return (
        <>
            <div className="min-h-screen flex">
                <div className={styles.navbar}>
                    <NavBar />
                </div>
                <div className={styles.timeline}>
                    <SignOut />
                    {children}
                </div>
            </div>

        </>
    )
}
