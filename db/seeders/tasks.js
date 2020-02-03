'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [{
        id: '00814c16-dab1-4b08-9007-06f56afa54ct',
        title: 'This is a very important task.',
        priority: 50,
        createdAt: '2019-05-11 00:01:34',
        updatedAt: '2019-05-11 00:01:35'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};