module.exports = function (app) {
    const fileUpload = require("express-fileupload");
    const bodyParser = require("body-parser");
    const cors = require("cors");
    const morgan = require("morgan");
    const _ = require("lodash");
    // 파일 업로드 허용
    app.use(
      fileUpload({
        createParentPath: true,
      })
    );
  
    // 미들 웨어 추가
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan("dev"));
  
    const product = require("./productController");
  
    //4. 상품 판매 글 올리기 api
    app.post("/app/products/post", product.post);
    
    //5. 판매 게시글 수정하기 API
    // app.post("/app/products/:product_id/post", product.repost);
  
    //6.  상품 판매 글 조회 API
    // app.get("/app/products/:product_id", product.getPost);

    
  };
  