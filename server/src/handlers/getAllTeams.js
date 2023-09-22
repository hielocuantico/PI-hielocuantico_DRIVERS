const teams = require('../controllers/listTeams')

module.exports = async (req, res) => {
    try {
        const listaTeams = await teams();
        res.status(200).json(listaTeams)
        
    } catch (error) {
        res.status(500).json({ error: 'Error al acceder a los Teams' })
    }
}
