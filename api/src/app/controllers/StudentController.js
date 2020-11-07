const StudentService = require('../service/StudentService')
const ErrorService = require('../service/ErrorService')

const HTTP = require('../../constants/http')

class StudentController {
    async store(req, res, next) {
        try {
            const { body } = req;
            const response = await StudentService.store(body);

            if (response.status !== HTTP.CREATED) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res
                .status(HTTP.CREATED)
                .json({ student: response.student, message: response.describe });
        } catch (err) {
            return next(err);
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { body } = req;

            const response = await StudentService.update({ ...body, id });

            if (response.status !== HTTP.OK) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res
                .status(HTTP.OK)
                .json({ student: response.student, message: response.describe });
        } catch (err) {
            return next(err);
        }
    }

    async destroy(req, res, next) {
        try {
            const { id } = req.params;

            const response = await StudentService.destroy(id);

            if (response.status !== HTTP.OK) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res.status(response.status).json({ message: response.describe });
        } catch (err) {
            return next(err);
        }
    }

    async get(req, res, next) {
        try {
            const { id } = req.params;

            const response = await StudentService.get(id);

            if (response.status !== HTTP.OK) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res
                .status(HTTP.OK)
                .json({ student: response.student, message: response.menssage });
        } catch (err) {
            return next(err);
        }
    }

    async index(req, res, next) {
        try {
            const response = await StudentService.getAll();

            if (response.status !== HTTP.OK) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res
                .status(HTTP.OK)
                .json({ student: response.student, message: response.menssage });
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = new StudentController();
