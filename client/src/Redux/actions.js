import { GET_DRIVERS, GET_TEAMS, GET_DRIVERID, GET_DRIVERNAME, POST_CREATEDRIV } from './actionsTypes'
import axios from 'axios'

export const getDrivers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios('http://localhost:3001/drivers')

            return dispatch({
                type: GET_DRIVERS,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export const getDriverId = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios('http://localhost:3001/drivers/:idDriver')

            return dispatch({
                type: GET_DRIVERID,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export const getDriverName = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios('http://localhost:3001/name')

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
            const { data } = await axios('http://localhost:3001/teams')
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
            const { data } = await axios.post('http://localhost:3001//drivers')

            return dispatch({
                type: POST_CREATEDRIV,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
}