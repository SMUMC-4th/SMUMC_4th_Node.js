module.exports = function (app) {
    const user = require("./userController");
    
      
  
    // 0. 테스트 api
    //app.get("/main", user.getTest);
  
    //1. 유저 생성 api
    app.post("/app/users", user.sign_up);
    
    //2. 전체 유저 조회 api
    // app.get("/app/users", user.getUsers);
  
    //3. 특정 유저 조회 api
    // app.get("/app/users/:user_id", user.getUser);

    
  };
  