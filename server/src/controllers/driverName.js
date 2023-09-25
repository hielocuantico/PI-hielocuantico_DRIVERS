const listDriver = require('./listDriver');

module.exports = async (name) => {
    const drivers = await listDriver();
    const nameSplit = name.split(" ").join("")

    const driverName = drivers.filter((driver) => {
        const $name = driver.name + driver.lastName
        return $name.toLowerCase().includes(nameSplit.toLowerCase())
    });

    if (driverName.length === 0) {
        throw new Error('No se encontraron corredores con ese nombre')
    }

    const listDriversbyName = driverName.slice(0, 15)
    return listDriversbyName
}
