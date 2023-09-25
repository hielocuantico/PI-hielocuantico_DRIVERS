import { useSelector, useDispatch } from "react-redux";
import {
  getDrivers,
  getTeams,
  filterByTeam,
  filterByOrder,
  filterByDOB,
  filterDataRoute,
  setPaginationPage,
} from "../../Redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect } from "react";

const Filters = () => {
  const teams = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams())
  }, [])

  const handleTeamsFilter = (event) => {
    const team = event.target.value
    dispatch(filterByTeam(team))
  }

  const handleOrderBy = (event) => {
    const { value } = event.target;
    dispatch(filterByOrder(value))
  }

  const handleOrderDOB = (event) => {
    const { value } = event.target;
    dispatch(filterByDOB(value))
  }

  const handleReset = () => {
    dispatch(setPaginationPage(1))
    dispatch(getDrivers)

    document.getElementById("teamsFilter").selectedIndex = 0;
    document.getElementById("orderByFilter").selectedIndex = 0;
    document.getElementById("orderDOBFIlter").selectedIndex = 0;

    dispatch(filterByTeam([]))
  }

  const handleDataRoute = () => {
    dispatch(filterDataRoute())
    setIsAPIFilter(!isAPIFilter)
  }

  return (
    <div>
      <div>
        <select id="teamsFilter" defaultValue={"default"} onChange={handleTeamsFilter}>
          <option value="default" >-Teams-</option>
          {teams?.map((team) => (
            <option key={team.id} value={team.name}>{team.name}</option>
          ))}
        </select>

        <select id="orderByFilter" defaultValue={"default"} onChange={handleOrderBy}>
          <option value="default">-Orden-</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <select id="orderDOBFIlter" defaultValue={"default"} onChange={handleOrderDOB}>
          <option value="default">-DOB-</option>
          <option value="asc">Mayor a menor</option>
          <option value="desc">Menor a mayor</option>
        </select>
        
        <button onClick={handleReset}>RESET</button>
      </div>

      <SearchBar />
    </div>
  );
};

export default Filters;