import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../Redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [nameToFilter, setNameToFilter] = useState('');

    const handleSearch = () => {
        dispatch(searchByName(nameToFilter));
    }

    const handleChange = (event) => {
        setNameToFilter(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div>
            <input type="text" value={nameToFilter} onKeyDown={handleKeyDown} onChange={handleChange} />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}

export default SearchBar;