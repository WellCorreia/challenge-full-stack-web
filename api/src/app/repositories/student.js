const { Student } = require('../models');
const { Op } = require("sequelize");

/**
 * Return all students
 */
const getAll = async () => await Student.findAll();

/**
 * Find a student by id
 * @param {*} id 
 */
const find = async (id) => await Student.findByPk(id);

/**
 * Create a student
 */
const create = async (body) => await Student.create({ ...body });

/**
 * Update a student 
 * @param {*} body 
 */
const update = async (body) => {
    const student = await Student.findByPk(body.id);
    return await student.update({ ...body });
};

/**
 * Remove a student, receiving the student object
 * @param {*} student 
 */
const destroy = async (student) => await student.destroy({force: true});

/**
 * Verify if exist a student with a those property
 * @param {*} cpf 
 * @param {*} email 
 * @param {*} academic_record 
 */
const findStudent = async (cpf, email, academic_record) => {
    return await Student.findOne({
        where: {
            [Op.or]: [
                { cpf },
                { email },
                { academic_record },
            ]
        }
    })
}

module.exports = {
    getAll,
    create,
    find,
    update,
    destroy,
    findStudent,
}