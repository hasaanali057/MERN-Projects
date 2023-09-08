const { models: { Vehicle } } = require('../../mySqlModels');

const addVehicle = async (req, res) => {
  
  try {
    await Vehicle.create({
      vehicleNumber: req.body.vehicleNumber,
      vehicleModel: parseInt(req.body.vehicleModel),
      vehicleVariant: req.body.vehicleVariant,
      engineNumber: req.body.engineNumber,
      chesisNumber: req.body.chesisNumber,
      vehicleMake: req.body.vehicleMake
    });
  
    return res.status(200).send("Vehicle Added Successful.")
  } catch (error) {
    return res.status(500).send(`Error Occured: ${error}.`)
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


module.exports = {
  addVehicle,
  findVehicle
}