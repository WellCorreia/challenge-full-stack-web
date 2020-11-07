'use strict';
const faker = require('faker');
const generateCpf = require('gerar-cpf');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('students', [{
      cpf: generateCpf(),
      name: await faker.name.findName(),
      email: await faker.internet.email(),
      academic_record: generateCpf(),
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('students', null, {});
  }
};
