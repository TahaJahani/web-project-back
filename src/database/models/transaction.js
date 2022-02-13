'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    amount: sequelize.BIGINT.UNSIGNED,
    description: sequelize.STRING,
    type: sequelize.ENUM,
    at: sequelize.DATE,
  }, {
    sequelize,
    paranoid: true,
    tableName: 'transactions',
    modelName: 'Transaction',
  });
  return Transaction;
};