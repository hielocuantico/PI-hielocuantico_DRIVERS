const { Router } = require("express");
const getDriverId = require('../handlers/getDriverId')
const getDriverName = require('../handlers/getDriverName')
const getDrivers = require('../handlers/getDrivers')
const getAllTeams = require('../handlers/getAllTeams')
const createDriv = require('../handlers/createDriver');

const router = Router();

router.get('/drivers', getDrivers)
router.get('/teams', getAllTeams)
router.get('/drivers/name', getDriverName)
router.get('/drivers/:id', getDriverId)
router.post('/drivers', createDriv)

module.exports = router;
