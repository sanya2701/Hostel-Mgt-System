function formValidation()
{
  var name= document.reg.name.value;
  var pswd= document.reg.psw.value;
  var rno= document.reg.allot.value;
  var mobile= document.reg.mob.value;
  var email= document.reg.email.value;
  var dob= document.reg.dob;
  var address=document.reg.address.value;

if(allLetter(name))
{
if(passid_validation(pswd))
{
if(Alphanumeric(rno))
   {
      if(phonenumber(mobile))
      {
        if(ValidateEmail(email))
        {
           if(validatedate(dob))
           {
              if(alphanumeric(address))
              {

              }
          }
        }          
      }
   }
}
}
return false;
}
 
 function allLetter(name)
{ 
var letters = /^[A-Za-z]+$/;
if(name.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
return false;
}
}

function passid_validation(passid)
{
var passid_len = passid.length;
if (passid_len == 0 ||passid_len >= 12 || passid_len < 7)
{
alert("Password should not be empty / length be between 7 to 12");
return false;
}
return true;
}

function Alphanumeric(rno)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(rno.match(letters))
{
return true;
}
else
{
alert('Room no must have alphanumeric characters only');
return false;
}
}

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("Not a valid phone no");
        return false;
        }
}

function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
return false;
}
}

function validatedate(inputText)
  {
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  if(inputText.value.match(dateformat))
  {
 
  var opera1 = inputText.value.split('/');
  var opera2 = inputText.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
 
  if (lopera1>1)
  {
  var pdate = inputText.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputText.value.split('-');
  }
  var dd = parseInt(pdate[0]);
  var mm  = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
 
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
  return false;
  }
  }
  }
  else
  {
  alert("Invalid date format!");
  return false;
  }
  }