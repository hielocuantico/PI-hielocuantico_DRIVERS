const listDriver = require('./listDriver');

module.exports = async (name) => {
    const drivers = await listDriver();

    const driverName = drivers.filter((driver) => {
        return driver.name.toLowerCase().includes(name.toLowerCase());
    });

    if (driverName.length === 0) {
        throw new Error('No se encontraron corredores con ese nombre')
    }

    const listDriversbyName = driverName.slice(0, 15)
    return listDriversbyName
}
