/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{type:'string',autoIncrement:false,columnName:'_id'},
    name:{type:'string',columnName:'name'}
  }
};