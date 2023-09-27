import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import styles from './Landing.module.css';

const Landing = () => {
    return (
        <div className={styles["content-container"]}>
            <div className={styles["logo-container"]}>
                <div className={styles["svg-container"]}>
                    <Logo />
                </div>
                <p className={styles.pI}>
                    Drivers-PI
                </p>
                <div>
                </div>
            </div>
            <Link to="/home" className={styles["btn-home-link"]}>
                <button className={styles["btn-home"]}>HOME</button>
            </Link>
        </div>
    );
};
 
export default Landing;