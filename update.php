<?php

$html = file_get_contents('https://www.mohfw.gov.in/'); //get the html returned from the following url

$pokemon_doc = new DOMDocument();

libxml_use_internal_errors(TRUE); //disable libxml errorshaa

if(!empty($html)){ //if any html is actually returned
	
	//echo $html;

	$pokemon_doc->loadHTML($html);
	libxml_clear_errors(); //remove errors for yucky html
	
	$elm = $pokemon_doc->getElementById('cases');
	$thirdTable = $elm->getElementsByTagName('tr');
	
	$str = $thirdTable->item(28)->nodeValue;
	echo $str;
	echo "<br>";
	$pieces = explode(" ", $str);
	$total = number_format(count($pieces));
	$counter = 0;		
	for ($x = 0; $x < $total; $x++) {
	    $pieces[$x] = preg_replace('/[^A-Za-z0-9]/', '',$pieces[$x]);
	    
	    if (is_numeric(trim($pieces[$x]))) { 
		echo "data ". number_format(trim($pieces[$x])). "|"; 
		${"data" . $counter} = number_format(trim($pieces[$x]));
		$counter++;
	    }
	}	
}
	$con = mysqli_connect('localhost','id13073551_krani','Kr@8619443496','id13073551_cases');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}

	$res = $con->query("SELECT id,Indian_cases,Cured,Death FROM total_cases ORDER BY id DESC LIMIT 1");
	$cars = array($res->fetch_all());
	echo $data0."|".$data1."|".$data2;
	echo " " ;
	echo $cars[0][0][1];
	
	if($data0 != $cars[0][0][1] || $data1 != $cars[0][0][2] || $data2 != $cars[0][0][3]){
		$sql = "INSERT INTO total_cases (id, Indian_cases, Cured, Death)
VALUES (default, '$data0', '$data1', '$data2')";

if ($con->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}
		//$sql="INSERT INTO `total_cases` (`id`,`Indian_cases`,`Cured`,`Death`) VALUES (default,'$data0','$data1','$data2')";
		//$result = mysqli_query($con,$sql);
	}

	
	


	mysqli_close($con);
?>
