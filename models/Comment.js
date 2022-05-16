const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comment extends Model {}

Comment.init({
    // add properites here, ex:
    commentBody: {
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    sequelize 
});

module.exports=Comment