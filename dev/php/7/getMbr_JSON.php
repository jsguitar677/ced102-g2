<?php
try{
  require_once("../15/connect.php");
  $sql = "select * from mbr where MBRNO =:mbrno";

  $mbr = $pdo->prepare($sql);
  $mbr->bindValue(":mbrno","1");
  $mbr->execute();
  $mbrRow = $mbr->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($mbrRow);


}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>