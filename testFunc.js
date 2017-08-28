exports.get_achievement = function(x,y,z){
  let sum = x + y + z;
  console.log(sum);
  if(sum>=250){
    return "A";
  }else if(sum>=200){
    return "B";
  }else if(sum>=100){
    return "C";
  }else{
    return "D";
  }
};

