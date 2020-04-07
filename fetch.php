<?php
$html = file_get_contents('https://timesofindia.indiatimes.com/coronavirus'); //get the html returned from the following url

$pokemon_doc = new DOMDocument();

libxml_use_internal_errors(TRUE); //disable libxml errorshaa

if(!empty($html)){ //if any html is actually returned
	
	//echo $html;
	$date = date("Y/m/d");

	$pokemon_doc->loadHTML($html);
	libxml_clear_errors(); //remove errors for yucky html

	$finder = new DomXPath($pokemon_doc);
	$classname="news-list";	
	$nodes = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");


	$str = $nodes->item(0)->getElementsByTagName('figcaption');
	$str1 = $nodes->item(0)->getElementsByTagName('p');
	$con = mysqli_connect('localhost','id13073551_krani','Kr@8619443496','id13073551_cases');
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}
	
	
	$con->query("DELETE FROM news;");
	
	for($x=0; $x<6; $x++){
		$heading1 = $str->item($x)->nodeValue;
		$content1 = $str1->item($x)->nodeValue;
		$sql = "INSERT INTO news (id, heading, content)
			VALUES (default, '$heading1', '$content1')";
		if ($con->query($sql) === TRUE) {
			echo "New record created successfully";
		} else {
		   echo "Error: " . $sql . "<br>" . $con->error;
		}
		
	}		
}
	
?>
