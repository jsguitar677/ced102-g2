<?php 
try {
	require_once("../../connect_ced102g2.php");
	$sql = "select * from prod where prodno =:id";
	$products = $pdo->prepare($sql);
	$products->bindValue(":id",$_GET["id"]);
	$products->execute();
	$prodRows = $products->fetch(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (PDOException $e) {
	echo $e->getMessage();
}
?>