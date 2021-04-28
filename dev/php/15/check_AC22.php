<?php
try{
  require_once("../../connect_ced102g2.php");
  $sql = "select * from mbr where MBRMAIL = :ForgetMemId ";
  
  $member = $pdo->prepare($sql);
  $member->bindValue(":ForgetMemId", $_POST["ForgetMemId"]);
  $member->execute();

  if( $member->rowCount() !=0){ //此帳號已存在, 不可用
    echo 1;

  }else{ //此帳號可使用
    echo 2;
  } 
}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>

