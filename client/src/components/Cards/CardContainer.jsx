import Card from "../Card/Card";
import styles from './CardContainer.module.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CardContainer = () => {
  const drivers = useSelector((state) => state.drivers);
  console.log("Drivers: ", drivers);
  const [shuffledDrivers, setShuffledDrivers] = useState([]);

  useEffect(() => {
    // Mezclar el array de forma aleatoria
    const shuffled = shuffleArray(drivers);
    // Obtener solo los primeros 9 elementos
    const limitedDrivers = shuffled.slice(0, 9);
    setShuffledDrivers(limitedDrivers);
  }, [drivers]);

  return (
    <div className={styles.cardContainer}>
      {shuffledDrivers.map((driv) => (
        <Card
          key={driv.id}
          id={driv.id}
          name={driv.name}
          lastName={driv.lastName}
          teams={driv.teams}
          image={driv.image}
          dob={driv.dob}
        />
      ))}
    </div>
  );
};

// Función para mezclar un array de forma aleatoria
const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default CardContainer;