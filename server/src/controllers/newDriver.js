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
        image: "https://hips.hearstapps.com/hmg-prod/images/sergio-perez-of-mexico-and-oracle-red-bull-racing-prepares-news-photo-1647447330.jpg?crop=1.00xw:0.751xh;0,0.0415xh&resize=980:*",
        nationality,
        dob,
    });

    await newDriver.addTeams(teams);
    return newDriver;

}