<?php
include("getMemInfoFIX.php");

try{
  require_once("../../connect_ced102g2.php");
 
  $MBRDATA=" INSERT INTO `comm` (`CommNo`, `ActNo`, `Timestamp`, `Mbrname`, `Message`) VALUES ( null , :actno , NOW(), :Mbrname, :MMessage )";


  $memberData = $pdo->prepare($MBRDATA);
  //留言
  $memberData->bindValue(":actno",$_POST["ACTNO"]); //會員編號
  //時間
  $memberData->bindValue(":Mbrname",$_SESSION["MBRNAME"]);  //會員名稱
  $memberData->bindValue(":MMessage",  $_POST["MESSAGE"]); //留言內容
  $memberData->execute();

  echo "<script>window.history.back()</script>" ; 
  // $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);
  // echo json_encode($memRow);

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}

?>