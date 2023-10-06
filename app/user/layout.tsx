import NavBar from './navbar'
import styles from './user.module.css'

export default function UserLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen flex">
                <div className={styles.navbar}>
                    <NavBar />
                </div>
                <div className={styles.timeline}>
                    {children}
                </div>
            </div>

        </>
    )
}
