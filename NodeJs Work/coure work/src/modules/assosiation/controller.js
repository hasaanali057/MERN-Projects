const { models: { Vehicle, User } } = require('../../mySqlModels');

const assignVehicleToUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        user_id: req.body.user_id
      }
    });
    console.log(user);

    const vehicle = await Vehicle.findOne({
      where: {
        user_id: null
      }
    });
    console.log(vehicle);

    if(user){
      if(vehicle){
        await Vehicle.update({
          user_id: user.user_id
        },{
          where: {
            vehicleNumber: vehicle.vehicleNumber
          }
        });
        return res.status(200).send("Vehicle Assigned.");
      }else{
        return res.status(400).send("No Vehicles Available...")
      } 
    }
    else{
      return res.status(400).send("User Does not Exists.")
    }
  } catch (error) {
    res.status(500).send("Something Went Wrong.")
  }
}

module.exports = {
  assignVehicleToUser
}