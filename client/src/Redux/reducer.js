import {
    GET_DRIVERS,
    GET_TEAMS,
} from "./actionsTypes"

const initialState = {
    drivers: [],
    teams: [],
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_DRIVERS:
            return { ...state, drivers: payload }

        case GET_TEAMS:
            return { ...state, teams: payload }

        default:
            return { ...state }
    }
}

export default reducer