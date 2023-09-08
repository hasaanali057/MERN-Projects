
module.exports = (sequelize, Datatypes) => {

  // one of the two approaches to define a model and its attributes
  const User = sequelize.define(
    //model name (table in the DB)
    'user',
  //attributes
  {
    user_id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: Datatypes.STRING,
    password: Datatypes.STRING
  });

  return User;
}