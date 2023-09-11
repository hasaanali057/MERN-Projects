const express = require ('express');

const assosiationRouter = express.Router();

const {
  assosiateVehicleMiddleWare
} = require('./middleware');

const {
  assignVehicleToUser
} = require('./controller')

assosiationRouter.patch('/assignVehicle', assosiateVehicleMiddleWare, assignVehicleToUser);

module.exports = assosiationRouter;
