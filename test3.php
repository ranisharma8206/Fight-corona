<?php 
$date = date("Y/m/d");
$con = mysqli_connect('localhost','id13073551_krani','Kr@8619443496','id13073551_cases');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}
	$res = $con->query("SELECT id,heading,content FROM news");
	$cars = array($res->fetch_all());
	$n = number_format(count($cars[0]));
	
	//for($x=0; $x<$n; $x++){
		//echo $cars[0][$x][1];
		//echo "<br>";
	//}
	
	
?>


