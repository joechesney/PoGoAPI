'use strict';
module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define('Types', {
    name: DataTypes.STRING
  },  {
    "timestamps": true,
    "freezeTableName": true,
    "paranoid": true
  });
  Types.associate = function(models) {
    // associations can be defined here
    Types.belongsTo(models.Moves, {
      as: 'moveType'
    })
    Types.belongsTo(models.Pokemon, {
      as: 'type1'
    })
    Types.belongsTo(models.Pokemon, {
      as: 'type2'
    })
  };
  return Types;
};