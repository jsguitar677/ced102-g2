<?php 
try {
	require_once("../../connect_ced102g2.php");
	$sql = "select * from prod where prodca = 1";
	$products = $pdo->query($sql);
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (PDOException $e) {
}
?>