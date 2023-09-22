const { Driver } = require('../db.js');

module.exports = async (
    name,
    lastName,
    description,
    nationality,
    dob,
    teams    
) => {

    const newDriver = await Driver.create({
        name,
        lastName,
        description,
        image,
        nationality,
        dob,
    });

    await newDriver.addTeams(teams);
    
    return newDriver;

}