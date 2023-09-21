import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navContainer}>
            <Link to="/home" >
                <h1>
                    Home
                </h1>
            </Link>

            <Link to="/create">
                <h1>
                    Form
                </h1>
            </Link>
        </div>
    )
}

export default NavBar;