const { Student } = require('../models');
const Response = require('../../constants/response');

class StudentService {
  constructor() {
    this.student = Student;
  }

  /**
   * Método responsável por salvar um student
   * @param {*} body 
   */
  async store(body) {
    let student = await this.checkCPF(body.cpf);

    if (!student) {
      student = await this.checkAcademicRecord(body.academic_record); 
    }

    if (!student) {
      return {
        student: await this.student.create({ ...body }),
        ...Response.created,
      }
    }

    return Response.found;
  }

  /**
   * Método responsável por receber o um objeto student e alterar o registro
   * @param {*} body 
   */
  async update(body) {
    const student = await this.student.findByPk(body.id);

    if (!student) {
      return Response.notFound;
    }

    const studentAtt = await student.update({ ...body });

    return {
      student: studentAtt,
      ...Response.ok,
    };
  }

  /**
   * Método responsável por buscar um student pelo Academic Record
   * @param {*} academic_record 
   */
  checkAcademicRecord(academic_record) {
    return this.student.findOne({ where: { academic_record } });
  }

  /**
   * Método responsável por buscar um student pelo CPF
   * @param {*} cpf 
   */
  checkCPF(cpf) {
    return this.student.findOne({ where: { cpf } });
  }

  /**
   * Método responsável por retornar um student
   * @param {*} id 
   */
  async get(id) {
    const student = await this.student.findByPk(id);

    if (!student) {
      return Response.notFound;
    }

    return {
      student,
      ...Response.ok,
    }
  }

  /**
   * Métoto responsável por retornar todos os students
   */
  async getAll() {
    const student = await this.student.findAll();

    if (!student) {
      return Response.notFound;
    }

    return {
      student,
      ...Response.ok,
    }
  }

  /**
   * Método responsável por deletar um student
   * @param {*} id 
   */
  async destroy(id) {
    const student = await this.student.findByPk(id)

    if (!student) {
      return Response.notFound;
    }

    await student.destroy();

    return Response.deleted;
  }
}

module.exports = new StudentService();
