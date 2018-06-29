 <?php
 
mysql_connect('localhost','root','');
mysql_select_db("hostel");

if(isset($_POST['submit'])
{
	if(!empty($_POST['name'] && !empty($_POST['email'] && !empty($_POST['psw'] && !empty($_POST['mobno'] && !empty($_POST['dob'))
	{$name=$_POST['name'];
echo $name;
$email=$_POST['email'];
//echo $gender;
$psw=$_POST['psw'];
//echo $email;
$mobno=$_POST['mobno'];
//echo $pass;
$dob=$_POST['dob'];
//echo $mob;


$query="insert into 
register(name,email,psw,mobno,dob) values
('$name','$email','$psw','$mobno','$dob')";

mysql_query($query);
header("location:login2.html");
}		}


?>