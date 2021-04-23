<?php 
session_start();
$result = ["prodName"=>$_SESSION["prodName"], "count"=>$_SESSION["count"], "price"=>$_SESSION["price"], "src"=>$_SESSION["src"];
	// echo ($result);

?>