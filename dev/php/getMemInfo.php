<?php 
session_start();
if(isset($_SESSION["MBRMAIL"])===true){ //表示已登入
	$result =  ["MBRMAIL"=>$_SESSION["MBRMAIL"], "MBRNAME"=>$_SESSION["MBRNAME"]];
	echo json_encode($result);
}else{
	echo "{}";
}
?>