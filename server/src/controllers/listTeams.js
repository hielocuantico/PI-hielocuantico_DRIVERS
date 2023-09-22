const axios = require('axios')
const { Teams } = require('../db')

module.exports = async () => {
    try {
        const response = await axios.get('http://localhost:5000/drivers');
        const drivers = response.data;

        // Crear un conjunto para equipos únicos
        const teams = new Set();

        for (let i = 0; i < drivers.length; i++) {
            if (drivers[i].teams) {
                const aux = drivers[i].teams.split(",").map(equipo => equipo.trim())
                aux.forEach(equipo => teams.add(equipo))
            }
        }
        const $teams = [...teams]

        // Utilizar Promise.all para crear equipos en la base de datos
        await Promise.all(
            $teams.map(async equipo => {
                await Teams.findOrCreate({
                    where: {
                        name: equipo
                    }
                })
            })
        )

        // Obtener todos los equipos desde la base de datos
        const dbTeams = await Teams.findAll({
            order: [['id', 'ASC']]
        })

        return dbTeams;

    } catch (error) {
        console.error('Error en la función listTeams:', error);
    }
}