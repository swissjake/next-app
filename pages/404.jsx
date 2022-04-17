import { useEffect } from "react";
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import Link from "next/link";



const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000);
    }, [])

    return (
        <div>
            <div className="not-found">
                <h1 className={styles.fofo}>404</h1>
                <h2>Ooops, It seems you&apos;re lost</h2>
                <p>Go back to the <Link href="/"><a className="btn">Homepage</a></Link></p>
            </div>
        </div>
    )
}

export default NotFound;