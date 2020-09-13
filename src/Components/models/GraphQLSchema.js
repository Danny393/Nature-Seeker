const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = graphql;

const SQLdb = require('./SQLSchema');

const Users = new GraphQLObjectType({
    name: "Users",
    description: "This is the user model object",
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(user){return user.id;}},
            firstName: {
                type: GraphQLString,
                resolve(user){return user.firstName}},
            lastName: {
                type: GraphQLString,
                resolve(user){return user.lastName}},
            email: {
                type: GraphQLString,
                resolve(user){return user.email}},
            password: {
                type: graphql.GraphQLString,
                resolve(user){return user.password}}
        }
    }
});

const Shoes = new GraphQLObjectType({
    name: "Shoes",
    description: "This is the shoe model object",
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(shoe){return shoe.id}},
            name: {
                type: GraphQLString,
                resolve(shoe){return shoe.name}},
            sku: {
                type: GraphQLString,
                resolve(shoe){return shoe.sku}},
            image: {
                type: GraphQLString,
                resolve(shoe){return shoe.image}},
            description: {
                type: GraphQLString,
                resolve(shoe){return shoe.description}},
            price: {
                type: GraphQLFloat,
                resolve(shoe){return shoe.price}},
            qty: {
                type: GraphQLInt,
                resolve(shoe){return shoe.qty}},
            manufacturer: {
                type: GraphQLString,
                resolve(shoe){return shoe.manufacturer}},
            rating: {
                type: GraphQLFloat,
                resolve(shoe){return shoe.rating}},
            size: {
                type: new GraphQLList(GraphQLInt),
                resolve(shoe){return shoe.getSizes()}}
        }
    }
});

const Tents = new GraphQLObjectType({
    name: "Tents",
    description: "This is the tent model object",
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(tent){return tent.id}},
            name: {
                type: GraphQLString,
                resolve(tent){return tent.name}},
            sku: {
                type: GraphQLString,
                resolve(tent){return tent.sku}},
            image: {
                type: GraphQLString,
                resolve(tent){return tent.image}},
            description: {
                type: GraphQLString,
                resolve(tent){return tent.description}},
            price: {
                type: GraphQLFloat,
                resolve(tent){return tent.price}},
            qty: {
                type: GraphQLInt,
                resolve(tent){return tent.qty}},
            manufacturer: {
                type: GraphQLString,
                resolve(tent){return tent.manufacturer}},
            rating: {
                type: GraphQLFloat,
                resolve(tent){return tent.rating}},
            size: {
                type: new GraphQLList(GraphQLInt),
                resolve(tent){return tent.getSizes()}}
        }
    }
});

const Products = new GraphQLObjectType({
    name: "Products",
    description: "This is the product model object",
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(product){return product.id}
            },
            sku: {
                type: GraphQLInt,
                resolve(product){return product.sku}
            },
            name: {
                type: GraphQLString,
                resolve(product){return product.name}
            }
        }
    }
});

const Manufacturers = new GraphQLObjectType({
    name: "Manufacturers",
    description: "This is the manufacturers model object",
    fields: () => {
        return{
            id: {
                type: GraphQLID,
                resolve(manufacturer){return manufacturer.id}
            },
            name: {
                type: GraphQLString,
                resolve(manufacturer){return manufacturer.name}
            },
            items: {
                type: GraphQLList(Products),
                resolve(manufacturer){return manufacturer.getProducts();}
            }
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'This is the root query',
    fields: {
        shoes: {
          type: new GraphQLList(Shoes),
          args: {
            id: {type: GraphQLID},
            name: {type: GraphQLString}
          },
          resolve(root, args){return SQLdb.models.shoes.findAll({where: args});}
        },
        manufacturers: {
          type: new GraphQLList(Manufacturers),
          args: {
            id: {type: GraphQLID}
          },
          resolve(root, args){return SQLdb.models.manufacturers.findAll({where: args});}
        },
        tents: {
          type: new GraphQLList(Tents),
          args: {
            id: {type: GraphQLID},
            name: {type: GraphQLString}
          },
          resolve(root, args){return SQLdb.models.tents.findAll({where: args});}
        },
        products: {
            type: new GraphQLList(Products),
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString}
            },
            resolve(root, args){return SQLdb.models.products.findAll({where: args});}
        } 
      }
  });

  const GraphSchema = new GraphQLSchema({
      query: RootQuery
  });

  module.exports = GraphSchema;