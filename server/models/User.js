const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

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

userSchame.pre('save', function( next ) {
  var user = this;

  if(user.isModified('password')) {
    // 비밀번호를 암호화 시킨다
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if(err) return next(err);
      
      bcrypt.hash(user.password, salt, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
      });
    });
  }
  else {
    next();
  }
});

userSchame.methods.comparePassword = function(plainPassword, cb) {
  
  // plainPassword : 사용자가 입력한 비밀번호
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};


// 10/23(토) : 로그인 기능
userSchame.methods.generateToken = function(cb) {
  var user = this;

  // jsonwebtoken을 이용해서 token 생성
  // user._id + 'secretToken' = token
  // 'secretToken' -> user._id를 얻을 수 있음
  var token = jwt.sign(user._id.toHexString(), 'secretToken'); // user._id는 DB에 저장된 Object ID
  user.token = token;

  user.save(function(err, user) {
    if(err) return cb(err);
    return cb(null, user);
  });
};


// 10/25(월) : Auth 기능
userSchame.statics.findByToken = function(token, cb) {
  var user = this;

  // Token을 복호화한다.
  jwt.verify(token, 'secretToken', function(err, decoded) {
    // 사용자 ID를 이용하여 사용자를 찾은 다음에
    // 클라이언트에서 가져온 Token과 DB에 보관된 Token이 일치하는지 확인

    user.findOne({"_id": decoded, "token": token }, function(err, user) {
      if(err) return cb(err);
      cb(null, user);
    });
  });
  
};

const User = mongoose.model('User', userSchame);      // model('모델명', 사용할 스키마)

module.exports = { User }     // 다른 모듈에서도 사용할 수 있게 내보내기