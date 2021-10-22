const express = require('express') // express module을 가져옴
const app = express() // 새로운 express app을 생성
const port = 5000 // 통신 포트

const config = require('./config/key')

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI).then(()=>console.log('MongoDB Connected..'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 핫리로드!') // 루트 디렉토리에서 Hello World 출력
})

const bodyParser = require('body-parser');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

const { User } = require('./models/User');

// Register Route 생성
app.post('/register', (req, res) => {
  // 경로는 /register, 매개변수는 request, response
  // 회원 가입 할 때에 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다

  // req.body는 {id:"hello", password:"123"} 등과 같이 json 형식으로 들어있다
  const user = new User(req.body)

  user.save((err, userInfo)=> {
    // MongoDB에 저장하는 함수
    // 저장 실패 시 err 출력, 성공 시 userInfo 출력
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) // app 실행
})