const drivers = require('../controllers/listDriver')

module.exports = async (req, res) => {
    try {
        const listaDrivers = await drivers()
        res.status(200).json(listaDrivers)
        
    } catch (error) {
        console.error('Error al acceder a los datos locales:', error);
        res.status(500).json({ error: 'Error al acceder a los datos locales' })
    }
}
