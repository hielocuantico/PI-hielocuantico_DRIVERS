import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../../Redux/actions';
import Card from '../Card/Card';
import DriversPagination from '../Pagination/Pagination';
import styles from './CardContainer.module.css';

function CardContainer() {
  const drivers = useSelector((state) => state.drivers);
  const driversByTeams = useSelector((state) => state.driversByTeams)
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const driversPerPage = 9;
  const startIndex = (currentPage - 1) * driversPerPage
  const endIndex = startIndex + driversPerPage

  const driversFiltered = driversByTeams.length !== 0
      ? driversByTeams.slice(startIndex, endIndex)
      : drivers.slice(startIndex, endIndex)

  useEffect(() => {
    dispatch(getDrivers());
  }, [driversByTeams, dispatch])

  return (
    <>
      <DriversPagination />
      <div className={styles.cardContainer}>
        {driversFiltered?.map((driver) => (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name}
            lastName={driver.lastName}
            dob={driver.dob}
            teams={driver.teams}
            image={driver.image}
          />
        ))}
      </div>
    </>
  );
}

export default CardContainer;
