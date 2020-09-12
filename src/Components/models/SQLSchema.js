const Sequelize = require('sequelize');
const _ = require('lodash');
const data = require('./fake-data');
const uuid = require('uuid/v4');

const Connection = new Sequelize (
    'storeDB',
    'postgres',
    'postgres',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
);

//================== Tables ========================//
const Users = Connection.define('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUID4
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isPassword: true,
      }
    }
  });