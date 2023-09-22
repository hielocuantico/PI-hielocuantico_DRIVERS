const findDriverName = require('../controllers/driverName')

module.exports = async (req, res) => {
    try {
        const queryName = req.query.name
        const name = await findDriverName(queryName)
        res.status(200).json(name)
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}