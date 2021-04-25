<?php 
try {
	require_once("../../connect_ced102g2.php");
	$sql = "select * from prod where (prodca=1 and prodstat=1) order by listeddate desc limit 3";
	$NewProuct = $pdo->query($sql);
	$NewProdRows = $NewProuct->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($NewProdRows);
} catch (PDOException $e) {
}
?>
