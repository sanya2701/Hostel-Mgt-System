function formValidation()
{
	var name=document.reg.name.value;
	var email=document.reg.email.value;
	var psw=document.reg.psw.value;
	var mob=document.reg.mobno.value;
	var dob=document.reg.dob;
	if(allLetter(name))
	{
		if(ValidateEmail(email))
		{
			if(pswValidation(psw,7,12))
			{
               if(phonenumber(mob))
               {
               	  if(validatedate(dob))
               	  {

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
else if(name=="")
{
  alert("Please enter your name");

}
else
{
alert('Username must have alphabet characters only');
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
else if(email=="")
{
  alert("Please enter your email");
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}

function pswValidation(psw,mx,my)
{
var passid_len = psw.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
return false;
}
else
return true;
}

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno))
        {
      return true;
        }
        else if(inputtxt=="")
{
  alert("Enter your contact no");
}
      else
        {
        alert("Not a valid phone no.Phone no must be of 10 digits.");
        return false;
        }
}

function validatedate(inputText)
  {
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
if(inputText.value=="")
{
  alert("Enter your Date of birth");
}
  else
    {if(inputText.value.match(dateformat))
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
}