import {
  GET_DRIVERS,
  GET_TEAMS,
  FILTER_BY_TEAM,
  FILTER_ORDER_BY,
  FILTER_DOB,
  FILTER_BY_NAME,
  SET_PAGINATION_PAGE
} from "./actionsTypes";

const initialState = {
  drivers: [],
  teams: [],
  driversByTeams: [],
  currentPage: 1,
  totalPages: 0,
};

const reducer = (state = initialState, { type, payload }) => {

  const filterState = state.driversByTeams.length !== 0
    ? "driversByTeams"
    : "drivers"

  const $drivers = state.driversByTeams.length !== 0
    ? state.driversByTeams
    : state.drivers

  switch (type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: payload,
      };

    case GET_TEAMS:
      return {
        ...state,
        teams: payload,
      };

    case FILTER_BY_TEAM:
      const filtroTeams = state.drivers.filter((driver) => driver.teams?.includes(payload)); {
        return {
          ...state,
          driversByTeams: filtroTeams
        }
      }

    case FILTER_ORDER_BY:
      const ordenar = [...$drivers].sort((a, b) => {
        if (payload === "asc") {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
        } else if (payload === "desc") {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
        }
        return 0;
      });
      return {
        ...state,
        [filterState]: ordenar
      }

    case FILTER_DOB:
      const ordenDob = [...$drivers].sort((a, b) => {
        const yearA = parseInt(a.dob.substring(0, 4));
        const yearB = parseInt(b.dob.substring(0, 4));

        if (payload === "asc") {
          return yearB - yearA;
        } else if (payload === "desc") {
          return yearA - yearB;
        }

        return 0;
      });
      return {
        ...state,
        [filterState]: ordenDob
      }

    case FILTER_BY_NAME:
      return {
        ...state,
        [filterState]: payload,
      };

    case SET_PAGINATION_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    default:
      return state;
  }
};

export default reducer;