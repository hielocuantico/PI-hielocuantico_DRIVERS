const findDriverName = require('../controllers/driverName')

module.exports = async (req, res) => {
    try {
        const { name } = req.query

        if (name) {
            const driverName = await findDriverName(name)
            res.status(200).json(driverName)
        } else {
            res.status(400).json({ error: 'Debe ingresar un nombre' })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}