import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDrivers, getTeams } from "../../Redux/actions";
import Card from "../Card/Card";
import styles from './CardContainer.module.css';

const CardContainer = () => {
  const drivers = useSelector((state) => state.drivers);
  const teams = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 9;

  // Estado para la busqueda por nombre
  const [searchQuery, setSearchQuery] = useState("");

  // Estados para los filtros
  const [selectedTeam, setSelectedOption] = useState("");
  const [selectedStore, setSelectedStore] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handles para la busqueda
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }

  // Handles para filtros
  const handleTeamFilterChange = (event) => {
    setSelectedOption(event.target.value);
    setCurrentPage(1); // Resetear la página al cambiar el filtro
  };

  const handleOrderFilterChange = (event) => {
    setSelectedOrder(event.target.value)
  }

  const handleStoreFilterChange = (event) => {
    setSelectedStore(event.target.value);
  };

  // Filtrado
  const filteredDrivers = selectedTeam
    ? drivers.filter((driv) => driv.teams && driv.teams.includes(selectedTeam))
    : drivers;

  const filteredDriversByStore = selectedStore
    ? filteredDrivers.filter((driv) => {
      if (Number.isInteger(driv.id)) {
        return selectedStore === "api";
      } else {
        return selectedStore === "database";
      }
    })
    : filteredDrivers;

  const sortedDrivers = selectedOrder === "asc"
    ? filteredDriversByStore.sort((a, b) => a.name.localeCompare(b.name))
    : selectedOrder === "desc"
      ? filteredDriversByStore.sort((a, b) => b.name.localeCompare(a.name))
      : selectedOrder === "dob"
        ? filteredDriversByStore.sort((a, b) => a.dob.localeCompare(b.dob))
        : filteredDriversByStore;

  // Paginado
  const totalPages = Math.ceil(sortedDrivers.length / driversPerPage);
  const startIndex = (currentPage - 1) * driversPerPage;
  const endIndex = startIndex + driversPerPage;
  const driversForPage = sortedDrivers.slice(startIndex, endIndex);

  return (
    <div>
      <div>
        <div className={styles.searchBar}>
          <h1>Buscar</h1>
          <input type="text" placeholder="Nombre del corredor" value={searchQuery} onChange={handleSearchQueryChange}/>
        </div>
      </div>

      <div className={styles.filterContainer}>
        <p>Selecciona un equipo</p>
        <select name="Teams" id="" onChange={handleTeamFilterChange}>
          <option value="">-Seleccionar-</option>
          {teams.length > 0 ? (
            teams.map((team) => (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            ))
          ) : (
            <option value="">Cargando equipos...</option>
          )}
        </select>

        <p>Almacenamiento</p>
        <select name="" id="" onChange={handleStoreFilterChange}>
          <option value="">-Seleccionar-</option>
          <option value="database">Base de datos</option>
          <option value="api">API</option>
        </select>

        <p>Ordenar por</p>
        <select name="" id="" onChange={handleOrderFilterChange}>
          <option value="">-Seleccionar-</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
          <option value="dob">Año de nacimiento</option>
        </select>
      </div>

      <div className={styles.cardContainer}>
        {driversForPage.map((driv) => (
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

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? styles.active : ""}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;