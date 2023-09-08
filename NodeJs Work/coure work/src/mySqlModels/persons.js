
module.exports = (sequelize, Datatypes) => {

  // one of the two approaches to define a model and its attributes
  const Person = sequelize.define(
    //model name (table in the DB)
    'person',
  //attributes
  {
    userid: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false
    },
    password: {
      type: Datatypes.STRING,
      allowNull:false
    }
  },
  {
    //options like pluralizeTableName etc etc
  });

  return Person;
}