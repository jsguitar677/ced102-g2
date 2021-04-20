<?php
try{
    require_once("connect.php");
    $MBRDATA=" SELECT ORDERNO, ORDERDATE FROM orders WHERE MBRNO = :MBRNO";

    // ORDERNO 訂單編號
    // ORDERDATE 送貨日期
    // ORDERTOTAL 訂單狀態
    // SHIPSTAT 送貨狀態 

    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO", $_POST["MBRNO"]);
    $memberData->execute();



    // 資料庫取回的資料
    $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($memRow); 


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>