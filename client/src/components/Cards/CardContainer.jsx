import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDrivers } from '../../Redux/actions';
import Card from '../Card/Card';
import styles from './CardContainer.module.css'

function CardContainer() {
  const drivers = useSelector(state => state.drivers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
  }, []);  

  return (
    <div className={styles.cardContainer}>
      {drivers.map((driver) => (
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
  );
}

export default CardContainer;