
const dbConfig = require('../../config/mysqlConnection');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    define: {
      freezeTableName: false,
      timestamps: false,
    }
  }
);

const db = {};
db.sequelize = sequelize;
db.models = {};

db.models.User = require('./models/users')(sequelize, Sequelize.DataTypes);
// db.models.Person = require('./persons')(sequelize, Sequalize.DataTypes);
db.models.Vehicle = require('./models/vehicle')(sequelize, Sequelize.DataTypes);

db.models.Vehicle.belongsTo(db.models.User, {
  foreignKey: "user_id",
  targetKey: "user_id"
});

db.models.User.hasOne(db.models.Vehicle, {
  foreignKey: "user_id",
  sourceKey: "user_id"
});


module.exports = db;
