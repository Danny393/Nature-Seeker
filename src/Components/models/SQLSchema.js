const Sequelize = require('sequelize');
const _ = require('lodash');
const data = require('./fake-data');
const uuid = require('uuid/v4');

const Connection = new Sequelize (
    'react-db',
    'postgres',
    'postgres',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
);