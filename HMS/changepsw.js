function matchpass(){  
var firstpassword=document.reg.new.value;  
var secondpassword=document.reg.confirm.value;  
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("passwords do not match!");  
return false;  
}  
}  