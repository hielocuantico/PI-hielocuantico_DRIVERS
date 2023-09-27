import { Link } from 'react-router-dom'
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <Link to={`/detail/${props.id}`} className={styles.Link}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={props.image} alt={`imagen del corredor ${props.name} ${props.lastName}`} />
                </div>
                <div className={styles.info}>
                    <p>Name: <span> {`${props.name} ${props.lastName}`}</span></p>
                    <p>DOB: <span>{props.dob}</span></p>
                    <p>Escuderias: <span>{props.teams}</span></p>
                </div>
            </div>
        </Link>
    )
}

export default Card;