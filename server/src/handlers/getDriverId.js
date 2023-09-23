const idDriver = require("../controllers/idDriver");

module.exports = async (req, res) => {
    try {
        const { id } = req.params;        
        if (data) {
            const data = await idDriver(id);
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: 'El ID del conductor no existe' });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};