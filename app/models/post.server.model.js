var waterline=require('waterline');
module.exports=waterline.Collection.extend({
  identity:'post',
  connection:'mongo',
  attributes:{
    title:{type:'string'},
    content:{type:'string'}
  }
});