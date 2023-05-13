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

module.exports = {
    createUserInfo
};  