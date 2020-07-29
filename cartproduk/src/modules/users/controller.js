const db = require('../../config/connection')
const { response } = require('../../helpers/response')

module.exports = {
    getAllCarts: async(req, res) => {
        try {
            db.query(`SELECT * FROM cart`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result, 'Get all Cart success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }
    },
    getDetailCart: async(req, res) => {
        try {
            const id = req.params.id
            db.query(`SELECT * FROM cart WHERE id='${id}'`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result[0], 'Get detail Cart success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }
    },
    insertCart: async(req, res) => {
        try {
            const nama_product = req.body.nama_product
            const harga = req.body.harga
            const keterangan = req.body.keterangan
            db.query(`INSERT INTO cart (nama_product, harga, keterangan) VALUES ('${nama_product}','${harga}','${keterangan}')`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result, 'insert Cart success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }

    },
    deleteCart: async(req, res) => {
        try {
            const id = req.params.id
            db.query(`DELETE FROM cart WHERE id='${id}'`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, null, 'delete Cart success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }
    },
}