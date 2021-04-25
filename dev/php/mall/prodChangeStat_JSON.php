<?php
try{
  require_once("../../connect_ced102g2.php");
  $update = "update prod set prodstat=:prodstat where prodno=:prodno";


  if(isset($_GET["prodstat"])){
    $updates = $pdo->prepare($update);
    $updates->bindValue(":prodstat",$_GET["prodstat"]);
    $updates->bindValue(":prodno",$_GET["prodno"]);
    $updates->execute();
  }

}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>