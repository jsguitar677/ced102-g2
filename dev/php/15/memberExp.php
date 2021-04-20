<?php
try{
    require_once("connect.php");
    $MBRDATA=" SELECT MBRNAME, MBRBIRTH, MBRPIC, MBRBIO ,MBREXP ,MBRCOINLV FROM orders WHERE MBRNO = :MBRNO";

    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO", $_POST["MBRNO"]);
    $memberData->execute();

    // 資料庫取回的資料
    $memRow = $memberData->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($memRow); 


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>