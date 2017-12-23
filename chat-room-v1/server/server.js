const express=require('express');
const utils=require('utility');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const userRouter=require('./user.js');

const app=express();

app.use(cookieParser());
app.use(bodyParser.json());

//只要前缀是user,它的子路由是由userRouter来定义的
app.use('/user',userRouter);

app.listen(9093,function(){
  console.log('Node app start at  port 9093');
})