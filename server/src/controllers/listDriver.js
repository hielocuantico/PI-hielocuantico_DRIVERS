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
            image: driv.image.url || "https://hips.hearstapps.com/hmg-prod/images/sergio-perez-of-mexico-and-oracle-red-bull-racing-prepares-news-photo-1647447330.jpg?crop=1.00xw:0.751xh;0,0.0415xh&resize=980:*",
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

    const teamsString = dbDrivers.map((driver) => driver.Teams.map((team) => team.name).join(", "));

    const $drivers = dbDrivers.map((driver, index) => {
        return {
            id: driver.id,
            name: driver.name,
            lastName: driver.lastName,
            description: driver.description,
            image: driver.image.url || "https://hips.hearstapps.com/hmg-prod/images/sergio-perez-of-mexico-and-oracle-red-bull-racing-prepares-news-photo-1647447330.jpg?crop=1.00xw:0.751xh;0,0.0415xh&resize=980:*",
            nationality: driver.nationality,
            dob: driver.dob,
            teams: teamsString[index]
        }
    });

    return [...$drivers, ...newArray];
}