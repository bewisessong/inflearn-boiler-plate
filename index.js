const express = require('express') // express module을 가져옴
const app = express() // 새로운 express app을 생성
const port = 5000 // 통신 포트

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://inf_web:1q2w3e@boilerplate.d8x9x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>console.log('MongoDB Connected..'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 그만!') // 루트 디렉토리에서 Hello World 출력
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) // app 실행
})