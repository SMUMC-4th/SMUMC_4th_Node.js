async function postPage(connection, Info) {
    console.log(Info);
    const postpageInfoQuery = `
    insert into product(product_id, user_user_id, createdAt, location, title, content, price, category_category_id) values(${Info[1]}, '${Info[0]}', now(), '${Info[2]}', '${Info[3]}', '${Info[4]}', '${Info[5]}','${Info[6]}');
    `;
    const pageRows = await connection.query(postpageInfoQuery, Info);
    return pageRows[0];
}

module.exports = {
    postPage,
};  