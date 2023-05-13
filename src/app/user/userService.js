const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const userProvider = require("./userProvider");
const userDao = require("./userDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const crypto = require("crypto");
const {connect} = require("http2");

exports.createInfo = async function(Info){
    try{

        const connection = await pool.getConnection(async (conn)=> conn);

        const InfoResult = await userDao.createUserInfo(connection, Info);
        console.log(`유저 가입 완료`);
        connection.release();

        return response(baseResponse.SUCCESS);
    }
    catch(err){
        logger.error(`App - editInfo Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}