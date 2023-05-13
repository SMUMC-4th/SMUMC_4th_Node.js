module.exports = {
  // Success
  SUCCESS: { isSuccess: true, code: 1000, message: true },

  // Success
  SUCCESS: { isSuccess: true, code: 1000, message: true },

  SIGNUP: { isSuccess: true, code: 1001, message: "신규 유저 로그인 성공" },

  //Connection, Transaction 등의 서버 오류
  DB_ERROR: { isSuccess: false, code: 4000, message: "데이터 베이스 에러" },
  SERVER_ERROR: { isSuccess: false, code: 4001, message: "서버 에러" },

  //Request Error
  REPORT_REDUNDANT: {isSuccess: false, code: 3005, message: "이미 접수된 신고입니다"},

}
  