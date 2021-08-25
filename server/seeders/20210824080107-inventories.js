'use strict';
const inventories = [
  {
    "id": 1,
    "name": "Apple Mac Mini 2018 MRTR2 Space Grey Quad Core i3 SSD 128 GB",
    "price": 12990000,
    "quantity": 20,
    "status": "Bagus",
    "UserId": 1
  },
  {
    "id": 2,
    "name": "led Monitor Acer Eb192Q",
    "price": 825000,
    "quantity": 20,
    "status": "Bagus",
    "UserId": 1
  },
]

inventories.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Inventories', inventories, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Inventorie', null, {})
  }
};
