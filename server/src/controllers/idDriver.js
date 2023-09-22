const { Driver } = require('../db');
const listDriver = require('./listDriver');

module.exports = async (id) => {
    const drivers = await listDriver();
    const driver = drivers.find((driver) => driver.id === parseInt(id));

    if (isNaN(id)) {
        return await Driver.findByPk(id);

    } else if (driver) {
        const driverInfo = {
            id: driver.id,
            name: driver.name,
            lastName: driver.lastName,
            description: driver.description,
            image: driver.image.url,
            nationality: driver.nationality,
            dob: driver.dob,
            teams: driver.teams ? driver.teams.split(",").map(team => team.trim()).join(", ") : "",
        };
        
        return driverInfo;
    };
};