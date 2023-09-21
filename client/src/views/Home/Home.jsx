import { useEffect } from "react";
import CardContainer from "../../components/Cards/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getTeams } from "../../Redux/actions";
import styles from './Home.module.css'

const Home = () => {
    const teams = useSelector((state) => state.teams)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDrivers())
        dispatch(getTeams())
    }, [])

    return (
        <div>
            <div className={styles.searchBar}>
                <h1>Render Home!</h1>
                <input type="text" placeholder="Corredor" />

            </div>

            <select name="Teams" id="">
                {teams.length > 0 ? (
                    teams.map(team => {
                        return <option key={team.id} value={team.name}>{team.name}</option>
                    })
                ) : (
                    <option value="">Cargando equipos...</option>
                )}
            </select>

            <CardContainer />
        </div>
    )
}

export default Home;