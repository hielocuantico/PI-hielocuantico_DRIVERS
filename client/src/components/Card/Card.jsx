import { Link } from 'react-router-dom'
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <Link to={`/detail/${props.id}`} className={styles.Link}>
            <div className={styles.card}>
                <p>Name: {`${props.name} ${props.lastName}`}</p>
                <p>DOB: {props.dob}</p>
                <p>Escuderias: {props.teams}</p>
                <img src={props.image} alt={`imagen del corredor ${props.name} ${props.lastName}`} />
            </div>
        </Link>
    )
}

export default Card;