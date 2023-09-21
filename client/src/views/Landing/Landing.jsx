import {Link} from 'react-router-dom'
import styles from './Landing.module.css'

const Landing = () => {
    return (
        <div >
            <h1>Render Landing</h1>
            <Link to="/home">
                <button className={styles["btn-home"]}>HOME</button>
            </Link>
        </div>
    )
}

export default Landing;