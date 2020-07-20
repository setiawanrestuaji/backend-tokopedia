const db = require('../../config/connection')
const { response } = require('../../helpers/response')

module.exports = {
    getAllUsers: async(req, res) => {
        try {
            db.query(`SELECT * FROM users`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result, 'Get all user success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }
    },
    getDetailUser: async(req, res) => {
        try {
            const id = req.params.id
            db.query(`SELECT * FROM users WHERE id='${id}'`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result[0], 'Get detail user success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }
    },
    insertUser: async(req, res) => {
        try {
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            db.query(`INSERT INTO users (name, email, password) VALUES ('${name}','${email}','${password}')`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result, 'insert user success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }

    },
    deleteUser: async(req, res) => {
        try {
            const id = req.params.id
            db.query(`DELETE FROM users WHERE id='${id}'`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, null, 'delete user success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }
    },
}