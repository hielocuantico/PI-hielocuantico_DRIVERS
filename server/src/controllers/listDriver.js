const { Driver, Teams } = require('../db')
const axios = require('axios');

module.exports = async () => {
    const response = await axios.get('http://localhost:5000/drivers');
    const drivers = response.data;

    // Formato para drivers API, image por defecto
    const newArray = drivers.map((driv) => {
        return {
            id: driv.id,
            name: driv.name.forename,
            lastName: driv.name.surname,
            description: driv.description,
            image: driv.image.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmgLLrt1ycoOuMB5gFRArtBcuBBTJrvjRpQ&usqp=CAU",
            nationality: driv.nationality,
            dob: driv.dob,
            teams: driv.teams
        }
    })
    
    // Relación de teams con drivers
    const dbDrivers = await Driver.findAll({
        include: {
            model: Teams,
            attributes: ["name"],
            through: { attributes: [] }
        }
    })

    // Formato para teams en string única
    const teamsString = dbDrivers.map((driver) => driver.Teams.map((team) => team.name).join(", "));

    // Formato para drivers DB, image por defecto
    const $drivers = dbDrivers.map((driver, index) => {
        return {
            id: driver.id,
            name: driver.name,
            lastName: driver.lastName,
            description: driver.description,
            image: driver.image.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmgLLrt1ycoOuMB5gFRArtBcuBBTJrvjRpQ&usqp=CAU",
            nationality: driver.nationality,
            dob: driver.dob,
            teams: teamsString[index]
        }
    });

    return [...$drivers, ...newArray];
}