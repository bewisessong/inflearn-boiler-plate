const { User } = require('../models/User');

let auth = (req, res, next) => {

   // 인증 처리를 하는 곳
   
   // 1. Cookie에서 Token을 가져온다
   let token = req.cookies.x_auth;

   // 2. 토큰을 복호화한 후 유저를 찾는다.
   User.findByToken(token, (err, user) => {
     if(err) return res.status(400).send(err);
     if(!user) return res.json({ isAuth: false, error: true });
     
     req.token = token;
     req.user = user;
     next();   // middleware -> index.js
   });

 }

 module.exports = { auth }