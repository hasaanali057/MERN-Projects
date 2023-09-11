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
  findVehicle,
  findVehiclebyId,
  deleteVehiclebyId
} = require ('./controller');

vehicleRouter.post('/addVehicle', addVehicleMiddleWare, addVehicle);

vehicleRouter.get('/displayAllVehicles', getVehicleMiddleWare, findVehicle);

vehicleRouter.get('/getVehicleByVehicleNumber/:id', getVehicleByIDMiddleWare,findVehiclebyId);

vehicleRouter.delete('/deleteVehicle', deleteVehicleMiddleWare, deleteVehiclebyId);

module.exports = vehicleRouter;