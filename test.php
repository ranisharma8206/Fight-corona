<?php
	$con = mysqli_connect('localhost','id13073551_krani','Kr@8619443496','id13073551_cases');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}
	$res = $con->query("SELECT id,Indian_cases,Cured,Death FROM total_cases ORDER BY id DESC LIMIT 1");
	$cars = array($res->fetch_all());
	$data0 = $cars[0][0][1];
	$data1 = $cars[0][0][2];
	$data2 = $cars[0][0][3];
	mysqli_close($con);
?>
