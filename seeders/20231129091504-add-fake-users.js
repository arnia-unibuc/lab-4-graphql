'use strict';
const { randEmail, randFullName, randPassword } = require('@ngneat/falso');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mockPassword = await bcrypt.hashSync('password', 10);

    const data = new Array(10).fill().map(() => ({
      name: randFullName(),
      email: randEmail(),
      password: mockPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Users', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
