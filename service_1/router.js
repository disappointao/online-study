const express=require('express');
let localhost='http://localhost:5000/public';
const {data}=require('./datas/detail-datas');
data.forEach((value,key)=>{
  value.img=localhost+value.img
});
let router=express.Router();
router.get('/',(req,res)=>{
  //处理数据中img地址的路径
  res.json(data);
});
router.get('/detail_template',(req,res)=>{
  const {info}=require('./datas/detail-template');
  res.json(info);
});
module.exports=router;