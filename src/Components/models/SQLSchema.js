const Sequelize = require('sequelize');
const _ = require('lodash');
const data = require('./fake-data');

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
  
const Shoes = Connection.define('shoes', {
  id:{
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING(5000),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(5000),
    allowNull:false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Tents = Connection.define('tents', {
  id:{
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING(5000),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(5000),
    allowNull:false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Products = Connection.define('products', {
  id: {
    allowNull: false,
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Manufacturers = Connection.define('manufacturers', {
  id: {
    allowNull: false,
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Shoes.belongsTo(Products);
Tents.belongsTo(Products);
Products.hasOne(Shoes);
Products.hasOne(Tents)
Products.belongsTo(Manufacturers);
Manufacturers.hasMany(Products);


//User (Product and Manu)
//Tents (Prouct and Manu)

Connection.sync({force: true}).then(() => {

  Manufacturers.bulkCreate([
    {
    name: 'Field & Steam',
    }, 
    {
    name: 'TimberLand'
    }
  ]);

  /*
  var n = 0;
  _.times(data.shoes.length, () => {
    const man = Connection.query('SELECT name FROM Manufacturers WHERE name = ' + data.shoes[n].manufacturer, { type: Connection.QueryTypes.SELECT });
    console.log(man.toJSON());
    n++;
  })
  */
})

module.exports = Connection;
  