

module.exports = (sequelize, Datatypes) => {
  const Vehicle = sequelize.define(
    'Vehicle',
  {
    vehicle_id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    vehicleNumber: Datatypes.STRING,
    vehicleMake: Datatypes.STRING,
    vehicleModel: Datatypes.INTEGER,
    vehicleVariant: Datatypes.STRING,
    engineNumber: Datatypes.STRING,
    chesisNumber: Datatypes.STRING
  });
  return Vehicle;
}