
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
// db.models.User = require('./users')(sequelize, Sequalize.DataTypes);
// db.models.Person = require('./persons')(sequelize, Sequalize.DataTypes);
db.models.Vehicle = require('./models/vehicle')(sequelize, Sequelize.DataTypes);

module.exports = db;
