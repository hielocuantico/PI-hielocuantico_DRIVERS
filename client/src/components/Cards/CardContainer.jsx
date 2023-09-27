import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../../Redux/actions';
import Card from '../Card/Card';
import DriversPagination from '../Pagination/Pagination';
import styles from './CardContainer.module.css';

function CardContainer() {
  const drivers = useSelector((state) => state.drivers);
  const driversByTeams = useSelector((state) => state.driversByTeams)
  const dataRouteFilter = useSelector((state) => state.dataRouteFilter);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const driversPerPage = 9;
  const startIndex = (currentPage - 1) * driversPerPage
  const endIndex = startIndex + driversPerPage

  const driversFiltered = driversByTeams.length !== 0
    ? driversByTeams.slice(startIndex, endIndex).filter((driver) => {
      if (dataRouteFilter === "") {
        return true;
      } else if (dataRouteFilter === "api") {
        return typeof driver.id === "number";
      } else if (dataRouteFilter === "database") {
        return typeof driver.id === "string";
      } else {
        return true;
      }
    })
    : drivers.slice(startIndex, endIndex).filter((driver) => {
      if (dataRouteFilter === "") {
        return true;
      } else if (dataRouteFilter === "api") {
        return typeof driver.id === "number";
      } else if (dataRouteFilter === "database") {
        return typeof driver.id === "string";
      } else {
        return true;
      }
    });

  useEffect(() => {
    dispatch(getDrivers());
  }, [driversByTeams])

  return (
    <div className="container">
      <DriversPagination />
      <div className={styles.cardContainer}>
        {driversFiltered?.map((driver) => (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name}
            lastName={driver.lastName}
            dob={driver.dob}
            teams={driver.teams?.split(",").join(", ")}
            image={driver.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
