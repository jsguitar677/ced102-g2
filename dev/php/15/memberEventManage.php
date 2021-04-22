<?php
include("getMemInfoFIX.php");

// require_once("connect.php");
require_once("../../connect_ced102g2.php");

try{
    $MBRDATA=" SELECT ACTNAME , ACTNO , ACTSDATE, ACTSTAT FROM actv WHERE MBRNO =:MBRNO";

    // 活動名稱 // 活動編號 //活動狀態 //是否需要延期 //活動下架
    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO",$_SESSION["MBRNO"]);
    $memberData->execute();

    // 資料庫取回的資料
    $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($memRow); 


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>


