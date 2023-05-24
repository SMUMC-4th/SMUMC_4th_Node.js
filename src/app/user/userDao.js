//유저 생성 api
async function createUserInfo(connection, Info) {
    console.log(Info);
    const createUserInfoQuery = `
    insert into user(user_id, name, email, phone_number, birth, sex, password, createdAt, status, manner, coupon_coupon_id) 
    values(${Info[0]}, '${Info[1]}', '${Info[2]}', '${Info[3]}', '${Info[4]}', '${Info[5]}', '${Info[6]}' , now(), '1', '36.5', 1);
    `;
    const userRows = await connection.query(createUserInfoQuery);
    return userRows[0];
}
//유저 조회 api
async function getUserInfo(connection, Info) {
    console.log(Info);
    const getUserInfoQuery = `
    SELECT user_id, email, nickname 
    FROM user 
    WHERE user_id = '${Info[0]}';
    `;
    const [userRows] = await connection.query(getUserInfoQuery, Info);
    return userRows;
}
//닉네임으로 조회 api
async function getnickname(connection, nickname) {
    console.log(nickname);
    const getnicknameQuery = `
    SELECT user_id, email, name 
    FROM user 
    WHERE nickname = '${nickname}';
    `;
    const userRows = await connection.query(getnicknameQuery, nickname);
    return userRows[0];
}

module.exports = {
    createUserInfo,
    getUserInfo,
    getnickname,
};  