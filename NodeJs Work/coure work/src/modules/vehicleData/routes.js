const express = require('express');

const vehicleRouter = express.Router();

const {
  addVehicleMiddleWare,
  getVehicleMiddleWare,
  getVehicleByIDMiddleWare,
  deleteVehicleMiddleWare
} = require ('./middleware');

const {
  addVehicle,
  findVehicle
} = require ('./controller');

vehicleRouter.post('/addVehicle', addVehicleMiddleWare, addVehicle);

vehicleRouter.get('/displayAllVehicles', getVehicleMiddleWare, findVehicle);

vehicleRouter.get('/getVehicleByVehicleNumber', getVehicleByIDMiddleWare);

vehicleRouter.delete('/deleteVehicle', deleteVehicleMiddleWare);

module.exports = vehicleRouter;