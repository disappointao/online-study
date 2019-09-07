const express=require('express');
const router=require('./router');
const path=require('path');
let app=express();
app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use(router);
app.listen(5000,()=>{
  console.log('服务器已启动！');
})