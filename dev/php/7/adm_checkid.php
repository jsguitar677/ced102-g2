<?php
try{
    require_once("../../connect_ced102g2.php");

  $sql = "select * from adm where ADMACC=?";
  $admacc = $pdo->prepare($sql);
  $admacc->bindValue(1, $_GET["admacc"]);
  $admacc->execute();

  
  if( $admacc->rowCount() !=0){ //此帳號已存在, 不可用
    echo "no";
  }else{ //此帳號可使用
    echo "yes";
  } 
}catch(PDOException $e){
  echo "error";
}
?>