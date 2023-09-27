import CardContainer from "../../components/Cards/CardContainer";
import Filters from "../../components/Filters/Filters";
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.homeBackground}>
            <Filters />
            <CardContainer />
        </div>
    )
}

export default Home;