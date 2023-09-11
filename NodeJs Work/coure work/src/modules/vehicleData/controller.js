const { models: { Vehicle } } = require('../../mySqlModels');

const addVehicle = async (req, res) => {
  
  try {
    const existingVehicle = await Vehicle.findOne({
      where: {
        vehicleNumber: req.body.vehicleNumber
      }
    });
    console.log(existingVehicle);
    if(!existingVehicle){
      await Vehicle.create({
        vehicleNumber: req.body.vehicleNumber,
        vehicleModel: parseInt(req.body.vehicleModel),
        vehicleVariant: req.body.vehicleVariant,
        engineNumber: req.body.engineNumber,
        chesisNumber: req.body.chesisNumber,
        vehicleMake: req.body.vehicleMake
      });
      return res.status(200).send("Vehicle Added Successful.");
    }else{
      return res.status(400).send("Vehicle Already Exists.");
    }
  } catch (error) {
    return res.status(500).send(error.errors[0].message);
  }
}

const findVehicle = async (req, res) => {

  try {
    const vehicles = await Vehicle.findAll();
    if(!vehicles){
      return res.send("No Data Available")
    }else{
      return res.status(200).send(vehicles)
    }
  } catch (error) {
    return res.status(500).send(`Error Occured: ${error}.`)
  }
}

const findVehiclebyId = async (req, res) => {

  try {
    const vehicle = await Vehicle.findOne({
      where: {
        vehicleNumber : req.params.id
      }
    });
    if(!vehicle){
      return res.send("No Data Available")
    }else{
      return res.status(200).send(vehicle)
    }
  } catch (error) {
    return res.status(500).send(`Error Occured: ${error}.`)
  }
}

const deleteVehiclebyId = async (req, res) => {

  try {
    await Vehicle.destroy({
      where: {
        vehicleNumber : req.body.vehicleNumber
      }
    });
    return res.send("Deleted Successful")
    
  } catch (error) {
    return res.status(500).send(`Error Occured: ${error}.`)
  }
}

module.exports = {
  addVehicle,
  findVehicle,
  findVehiclebyId,
  deleteVehiclebyId
}