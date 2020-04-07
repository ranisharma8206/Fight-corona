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
	$heading = array();
	$content = array();
	
	for($x=0; $x<7; $x++){
		$heading1 = $str->item($x)->nodeValue;
		$content1 = $str1->item($x)->nodeValue;
		array_push($heading,$heading1);
		array_push($content,$content1);
		
	}		
}
	
?>
