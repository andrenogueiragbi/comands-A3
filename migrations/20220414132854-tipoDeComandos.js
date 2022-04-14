'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('types_commands', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type:Sequelize.STRING,
        aloowNull: false,
        unique: true

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
    await queryInterface.dropTable('types_commands');
  }
};
