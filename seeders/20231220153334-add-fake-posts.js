'use strict';

const { query } = require('express');
const db = require('../models');
const { randCatchPhrase } = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const allUsers = await db.User.findAll();

    const posts = allUsers.map((user) => {
      return ({
        title: randCatchPhrase(),
        body: randCatchPhrase(),
        userId: user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    await queryInterface.bulkInsert('Posts', posts);
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
