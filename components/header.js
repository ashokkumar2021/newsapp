   
import styles from '../styles/header.module.css';
import Link from 'next/link'
//header function

function Header() {


    return (
        <div className={styles.main}>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/feed/1'}><a>Feed</a></Link>
            <Link href={'/about'}><a>About Me</a></Link>
        </div>
    )
}

export default Header
