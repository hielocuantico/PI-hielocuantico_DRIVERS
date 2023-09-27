import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDriverId, resetDetail } from "../../Redux/actions";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
    const driverDetail = useSelector((state) => state.driverDetail);
    const { id } = useParams();
    const dispatch = useDispatch();
        
    useEffect(() => {
        dispatch(getDriverId(id));
        return () => {
            dispatch(resetDetail())
        }
    }, []);

    return (
        <div className={styles.containerDetail}>
            <div className={`${styles.contentDetail} container`}>
                <div className={styles.imageContainer}>
                    <img src={driverDetail.image} alt="" className={styles.image} />
                </div>
                <div className={styles.infoContainer}>
                    <h1>Id: <span>{driverDetail.id}</span></h1>
                    <h1>Nombre: <span>{driverDetail.name}</span></h1>
                    <h1>Apellido: <span>{driverDetail.lastName}</span></h1>
                    <h1>Nacionalidad: <span>{driverDetail.nationality}</span></h1>
                    <h1>Nacimiento: <span>{driverDetail.dob}</span></h1>
                    <h1>Teams: <span>{driverDetail.teams} </span></h1>
                    <h1>Descripción: <p>{driverDetail.description}</p></h1>
                </div>
            </div>
        </div>
    );
};

export default Detail;