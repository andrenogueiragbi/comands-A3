'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('commands', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      type: {
        type:Sequelize.STRING,
        aloowNull: false,

      },
      title: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      commands: {
        type:Sequelize.TEXT,
        allowNull: false,
      },
      tags: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      creator: {
        type:Sequelize.STRING,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('commands');
  }
};
