import axios from 'axios'
import {
    URL_API,
    GET_DRIVERS,
    GET_TEAMS,
    GET_DRIVERID,
    POST_CREATEDRIV,
    FILTER_BY_TEAM,
    FILTER_ORDER_BY,
    FILTER_DOB,
    FILTER_BY_NAME,
    SET_PAGINATION_PAGE,
} from './actionsTypes'

export const getDrivers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL_API}/drivers`)

            return dispatch({
                type: GET_DRIVERS,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export const getDriverId = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL_API}/drivers/${id}`)

            return dispatch({
                type: GET_DRIVERID,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export const getTeams = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL_API}/teams`)
            return dispatch({
                type: GET_TEAMS,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export const postDriver = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL_API}/drivers`)

            return dispatch({
                type: POST_CREATEDRIV,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
}

// Filtros

export const filterByTeam = (team) => {
    return {
        type: FILTER_BY_TEAM,
        payload: team
    }
}

export const filterByOrder = (orden) => {
    return {
        type: FILTER_ORDER_BY,
        payload: orden
    }
}

export const filterByDOB = (orden) => {
    return {
        type: FILTER_DOB,
        payload: orden
    }
}

export const filterDataRoute = () => {
    return {
        type: FILTER_DATA_ROUTE,
        payload: true
    }
}

export const searchByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL_API}/drivers/name?name=${name}`)

            return dispatch({
                type: FILTER_BY_NAME,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export const setPaginationPage = (pageNumber) => ({
    type: SET_PAGINATION_PAGE,
    payload: pageNumber,
});