<?php 
try {
	require_once("./connect.php");
	$sql = "select * from prod ";
	$orders = $pdo->query($sql);  //執行指令
} catch (PDOException $e) {
	// echo "系統忙碌, 請通知系統維護人員~";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";	
}
?>


        
  