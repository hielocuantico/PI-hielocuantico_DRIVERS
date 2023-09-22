const listDriver = require('./listDriver');

module.exports = async (queryName) => {
    const drivers = await listDriver();

    const driverName = drivers.filter((driver) => {
        return driver.name.toLowerCase().includes(queryName.toLowerCase());
    });

    if (driverName.length === 0) {
        throw new Error('No se encontraron corredores con ese nombre')
    }

    const name = driverName.slice(0, 15)
    return name
}
