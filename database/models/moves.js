'use strict';
module.exports = (sequelize, DataTypes) => {
  const Moves = sequelize.define('Moves', {
    name: DataTypes.STRING,
    speed: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    energy: DataTypes.INTEGER
  },  {
    "timestamps": true,
    "freezeTableName": true,
    "paranoid": true
  });
  Moves.associate = function(models) {
    // associations can be defined here
    Moves.hasOne(models.Types, { as: 'moveType'})
  };
  return Moves;
};