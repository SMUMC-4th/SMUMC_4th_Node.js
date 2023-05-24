const userProvider = require("../../app/User/userProvider");
const userService = require("../../app/User/userService");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const fs = require("fs");

/**
 * API No. 1
 * API Name : 유저 생성 api
 * [POST] /app/users
 */
exports.sign_up = async function (req, res) {
    var userid = req.body.userid;
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var birth = req.body.birth;
    var sex = req.body.sex;
    var password = req.body.password;

    const Info = [userid, name, email, phone, birth, sex, password];

    const userInfo = await userService.createInfo(Info);
    return res.send(response(baseResponse.SIGNUP, userInfo));
};

/**
 * API No. 3
 * API Name : 특정 유저 조회 api
 * [GET] /app/users/:userid
 */
exports.getUser = async function (req, res) {
    var userid = req.query.userid;
    var name = req.body.name;
    var email = req.body.email;

    const Info = [userid, name, email];

    const userInfo = await userProvider.getUser(Info);
    return res.send(response(baseResponse.FINDUSER, userInfo));
};

exports.getnickname = async function (req, res) {
    var nickname = req.params.nickname;

    const userNickname = await userProvider.getuserNickname(nickname);
    return res.send(response(baseResponse.FINDUSER, userNickname));
};
