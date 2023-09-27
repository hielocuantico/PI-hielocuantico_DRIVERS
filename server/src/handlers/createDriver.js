const newDriver = require('../controllers/newDriver');

module.exports = async (req, res) => {
    try {
        const {
            name,
            lastName,
            description,
            nationality,
            dob,
            teams,
        } = req.body;

        const postDriver = await newDriver(
            name,
            lastName,
            description,
            nationality,
            dob,
            teams
        );
        console.log(postDriver);
        res.status(201).json(postDriver);

    } catch (error) {
        res.status(500).json({ error: 'Error al crear un conductor' });
    }
};