const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const userProvider = require("./userProvider");
const userDao = require("./userDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");


const {connect} = require("http2");

exports.getUser = async function(Info){
    try{

        const connection = await pool.getConnection(async (conn)=> conn);

        const InfoResult = await userDao.getUserInfo(connection, Info);
        console.log(`유저 조회 완료`);
        connection.release();

        return InfoResult;
    }
    catch(err){
        logger.error(`App - editInfo Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}
exports.getuserNickname = async function(nickname){
    try{

        const connection = await pool.getConnection(async (conn)=> conn);

        const nicknameResult = await userDao.getnickname(connection, nickname);
        console.log(`유저 조회 완료`);
        console.log(nicknameResult);
        connection.release();

        return nicknameResult;
    }
    catch(err){
        logger.error(`App - editInfo Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}