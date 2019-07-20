'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    max_cp: DataTypes.INTEGER,
    alolan: DataTypes.BOOLEAN,
    evo_candy_req: DataTypes.INTEGER,
    second_move_candy_req: DataTypes.INTEGER,
    second_move_stardust_req: DataTypes.INTEGER,
    buddy_distance: DataTypes.INTEGER
  }, {
    "timestamps": true,
    "freezeTableName": true,
    "paranoid": true
  });
  Pokemon.associate = function(models) {
    // associations can be defined here
    Pokemon.hasOne(models.Types, { as: 'type1'})
    Pokemon.hasOne(models.Types, { as: 'type2'})
  };
  return Pokemon;
};