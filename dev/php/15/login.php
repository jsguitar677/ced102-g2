<?php
session_start();
try{
  require_once("connect.php");
  $sql = "select * from `mbr` where MBRMAIL=:MBRMAIL and MBRPSW=:MBRPSW"; 

  $member = $pdo->prepare($sql);
  $member->bindValue(":MBRMAIL", $_POST["MBRMAIL"]);
  $member->bindValue(":MBRPSW", $_POST["MBRPSW"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
  	$memRow = $member->fetch(PDO::FETCH_ASSOC);
    $_SESSION["MBRMAIL"] = $memRow["MBRMAIL"];
    $_SESSION["MBRNAME"] = $memRow["MBRNAME"];

    //送出登入者的姓名資料
    $result = ["MBRMAIL"=>$memRow["MBRMAIL"], "MBRNAME"=>$memRow["MBRNAME"]];

    echo json_encode($memRow); //輸出json
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
