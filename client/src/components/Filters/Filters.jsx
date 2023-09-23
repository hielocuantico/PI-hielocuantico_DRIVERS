import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDrivers, getTeams } from "../../Redux/actions";
import SearchBar from "../SearchBar/SearchBar";

const Filters = () => {
    const drivers = useSelector(state => state.drivers)
    const teams = useSelector(state => state.teams)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDrivers())
        dispatch(getTeams())
    }, [])

    return (
        <div>
            <div>
                <select name="" id="">
                    <option value="">-Teams-</option>
                    {teams.map((team) => (
                        <option key={team.id} value={team.id}>{team.name}</option>
                    ))}
                </select>

                <select name="" id="">
                    <option value="">-Order By-</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DES</option>
                </select>

                <button>API / DB</button>
                <button>FECHA</button>
            </div>
            <SearchBar />

        </div>
    )
};

export default Filters;