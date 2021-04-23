<?php
session_start();
if(isset($_SESSION["ACTNAME"])===true){ //表示已登入
    $result = ["ACTNAME"=>$selectedActvRow["ACTNAME"]];
	echo json_encode($result);
}else{
	echo "{}";
}  
?>