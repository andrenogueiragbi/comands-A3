'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('coupons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING,
        aloowNull: false,

      },
      email_user: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:true
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


  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
