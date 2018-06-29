function formValidation()
{
	var id= document.reg.stuid.value;
	var age= document.reg.stuage.value;
	var name= document.reg.stuname.value;
	var g1=document.reg.gender;
	var fname= document.reg.fname.value;
	var date= document.reg.date.value;
	var mob= document.reg.mob.value;
	var email= document.reg.email.value;
	var address= document.reg.address.value;
	var state= document.reg.state.value;
	var pin= document.reg.pin.value;

	if(alphanumeric(id))
     {
     	if(allLetter(name))
     	{
     	if(radio(g1))

  {
     if(allnumeric(age))     	 {

     	  if(allLetter(fname))
     	  {
     	  	if(validatedate(date))
     	  	{
              if(phonenumber(mob))
              {
              	if(ValidateEmail(email))
              	{
              		if(Alphanumeric(address))
              		{
              			if(AllLetter(state))
              			{
                          if(Allnumeric(pin))
                          {

                          }
              			}
              		}
              	}

              }
     	  	}
     	  }
     	}
     }
     }
	}

return false;
}

function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.match(numbers))
{
return true;
}
else if(uzip=="")
{
	alert("Age cannot be null");
}
else
{
alert("Age must have numeric characters only");
return false;
}
}

function Allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if((uzip.match(numbers)) && (uzip.length==6))
{
return true;
}
else
{
alert("Pin must have numeric characters only");
return false;
}
}


function alphanumeric(rno)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(rno.match(letters))
{
return true;
}
else if(rno=="")
{
	alert("Student Id cannot be null")
}
else
{
alert("Student ID must have alphanumeric characters only");
return false;
}
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
alert("Address must have alphanumeric characters only");
return false;
}
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
	alert("Name cannot be null")
}
else
{
alert("Name must have alphabet characters only");
return false;
}
}

function AllLetter(name)
{ 
var letters = /^[A-Za-z]+$/;
if(name.match(letters))
{
return true;
}
else
{
alert("State must have alphabet characters only");
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

function validatedate(inputText)
  {
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  if(inputText.match(dateformat))
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

