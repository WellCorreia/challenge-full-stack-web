'use strict';
const faker = require('faker');
const { cpf } = require('cpf-cnpj-validator'); 

module.exports = {
  up: async (queryInterface) => {
    let numCpf = cpf.generate();
    numCpf = cpf.format(numCpf);
    await queryInterface.bulkInsert('students', [{
      cpf: numCpf,
      name: await faker.name.findName(),
      email: await faker.internet.email(),
      academic_register: Math.floor(Math.random() * 999999) + 111111,
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('students', null, {});
  }
};
