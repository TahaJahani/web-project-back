'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PasswordReset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PasswordReset.init({
    user_id: sequelize.INTEGER,
    hash: sequelize.STRING,
    used: sequelize.BOOLEAN,
    created_at: sequelize.DATE,
  }, {
    sequelize,
    tableName: 'password_resets',
    modelName: 'PasswordReset',
  });
  return PasswordReset;
};