<?php
try{
  require_once("connect.php");
  $sql = "select * from mbr where MBRMAIL=?";
  $member = $pdo->prepare($sql);
  $member->bindValue(1, $_POST["logMemId"]);
  $member->execute();

  if( $member->rowCount() !=0){ //此帳號已存在, 不可用
    echo 1;

  }else{ //此帳號可使用
    echo 2;
  } 
}catch(PDOException $e){
  echo "error";
}
?>

