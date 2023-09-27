import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {
    return (
        <div className={styles.navContainer}>
            <nav className={`${styles.nav} container`}>
                <div><img className={styles.logoImg} src="../../src/assets/formula1.png" alt="logo" /></div>
                <div>
                    <Link to="/home"  className={styles.linkHeader}>HOME</Link>
                    <Link to="/create" className={styles.linkHeader}>CREATE DRIVER</Link>
                </div>
                <SearchBar/>
            </nav>
        </div>
    )
}

export default NavBar;