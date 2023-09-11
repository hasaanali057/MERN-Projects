

module.exports = (sequelize, Datatypes) => {
  const Vehicle = sequelize.define(
    'Vehicle',
  {
    vehicleNumber: {
      type: Datatypes.STRING,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false,
    },
    vehicleMake: Datatypes.STRING,
    vehicleModel: Datatypes.INTEGER,
    vehicleVariant: Datatypes.STRING,
    engineNumber: Datatypes.STRING,
    chesisNumber: Datatypes.STRING
  });
  return Vehicle;
}