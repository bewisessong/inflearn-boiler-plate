const mongoose = require('mongoose');

const userSchame = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,      // john ahn@naver.com -> johnahn@naver.com 으로 변경. 즉, 스페이스 제거
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String    // 유효성 체크
  },
  tokenExp: {   // 토큰 유효기간 체크
    type: Number
  }
});

const User = mongoose.model('User', userSchame)      // model('모델명', 사용할 스키마)

module.exports = { User }     // 다른 모듈에서도 사용할 수 있게 내보내기