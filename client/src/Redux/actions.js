import axios from 'axios'
import {
    URL_API,
    GET_DRIVERS,
    GET_TEAMS,
    GET_DRIVERID,
    GET_DRIVERNAME,
    POST_CREATEDRIV,
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

export const getDriverName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL_API}/drivers/name?name=${name}`)

            return dispatch({
                type: GET_DRIVERNAME,
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

// Paginacion

// Filtros