const productProvider = require("../../app/product/productProvider");
const productService = require("../../app/product/productService");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");


/**
 * API No. 4
 * API Name : 상품 판매 글 올리기 api
 * [POST] /app/products/post"
 */
exports.post = async function (req, res) {
    var userid = req.body.userid;
    var productid = req.body.productid;
    var location = req.body.location;
    var title = req.body.title;
    var content = req.body.content;
    var price = req.body.price;
    var category = req.body.category;

    if(!title)
        return res.send(errResponse(baseResponse.POST_TITLE_EMPTY));

    const Info = [userid, productid, location, title, content, price, category];

    const postpageInfo = await productService.postpageInfo(Info);
    return res.send(errResponse(baseResponse.SUCCESS, postpageInfo));
};

