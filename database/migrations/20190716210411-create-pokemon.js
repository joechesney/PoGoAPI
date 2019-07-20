'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pokemon', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      attack: {
        type: Sequelize.INTEGER
      },
      defense: {
        type: Sequelize.INTEGER
      },
      stamina: {
        type: Sequelize.INTEGER
      },
      max_cp: {
        type: Sequelize.INTEGER
      },
      alolan: {
        type: Sequelize.BOOLEAN
      },
      evo_candy_req: {
        type: Sequelize.INTEGER
      },
      second_move_candy_req: {
        type: Sequelize.INTEGER
      },
      second_move_stardust_req: {
        type: Sequelize.INTEGER
      },
      buddy_distance: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pokemons');
  }
};