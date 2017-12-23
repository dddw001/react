
const mongoose=require("mongoose");

const DB_URL='mongodb://localhost:27017/imooc-chat';
mongoose.connect(DB_URL);

const models={
  user:{
    'user':{type:String,require:true},
    'pwd':{type:String,require:true},
    'type':{type:String,require:true},
    'avatar':{'type':String},//头像
    'desc':{'type':String},//个人简介或者职位简介
    'title':{'type':String},//职位名
    'company':{'type':String},//boss的公司
    'money':{'type':String}
  }
 
}

for(let m in models){
  mongoose.model(m,new mongoose.Schema(models[m]));
}

module.exports={
  getModel:function(name){
    return mongoose.model(name);
  }
}