<?php
include("getMemInfoFIX.php");

try{
    require_once("connect.php");
    
    $MBRDATA=" SELECT MBREXP ,MBRCOINLV FROM mbr WHERE MBRNO = :MBRNO";

    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData->execute();

    // 資料庫取回的資料
    $memRow = $memberData->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($memRow); 


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>