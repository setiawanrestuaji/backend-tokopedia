const db = require('../../config/connection')
const { response } = require('../../helpers/response')

module.exports = {
    getAllProduk: async(req, res) => {
        try {
            db.query(`SELECT * FROM produk`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result, 'Get all produk success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }
    },
    getDetailProduk: async(req, res) => {
        try {
            const id = req.params.id
            db.query(`SELECT * FROM produk WHERE id='${id}'`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result[0], 'Get detail produk success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }
    },
    insertProduk: async(req, res) => {
        try {
            const nama_produk = req.body.nama_produk
            const harga = req.body.harga
            db.query(`INSERT INTO produk (nama_produk, harga) VALUES ('${nama_produk}','${harga}')`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result, 'insert produk success', 200, null)
            })
        } catch (error) {
            console.log(error)
            response(res, false, null, 'internal server error', 500, null)
        }

    },
    updateProduk: async(req, res) => {
        try {
            const id = req.params.id
            const nama_produk = req.body.nama_produk
            const harga = req.body.harga
            db.query(`UPDATE produk SET nama_produk='${nama_produk}',harga='${harga}' WHERE id='${id}'`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, result, 'insert produk success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }

    },
    deleteProduk: async(req, res) => {
        try {
            const id = req.params.id
            db.query(`DELETE FROM produk WHERE id='${id}'`, (err, result) => {
                if(err){
                    response(res, false, null, 'internal server error', 501, null)
                }
                response(res, true, null, 'delete produk success', 200, null)
            })
        } catch (error) {
            response(res, false, null, 'internal server error', 500, null)
        }
    },
}