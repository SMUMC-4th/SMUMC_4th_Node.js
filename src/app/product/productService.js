const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const productProvider = require("./productProvider");
const productDao = require("./productDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const crypto = require("crypto");
const {connect} = require("http2");

exports.postpageInfo = async function(Info){
    try{

        const connection = await pool.getConnection(async (conn)=> conn);

        const InfoResult = await productDao.postPage(connection, Info);
        console.log(`페이지 업로드 완료`);
        connection.release();

        return response(baseResponse.SUCCESS);
    }
    catch(err){
        logger.error(`App - Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}