<?php
// require_once("connect.php");
require_once("../../connect_ced102g2.php");

try{
    $PDOO = "SET SQL_SAFE_UPDATES=0";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();

    $MBRDATA=" UPDATE `actv` SET `ACTSTAT` = 3 , `CANPROP` = :REASON  WHERE MBRNO=:MBRNO and ACTNO =:ACTNO";
    // UPDATE `資料表` SET `欄位2` = '資料2'  WHERE `欄位1` = '資料1'  ;
   

    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO", $_POST["MBRNO"]);
    $memberData->bindValue(":ACTNO", $_POST["ACTNOO"]);
    $memberData->bindValue(":REASON", $_POST["REASON"]);

    $memberData->execute();

    // // 資料庫取回的資料
    // $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);
    
    // echo json_encode($memRow); 

    $PDOO = "SET SQL_SAFE_UPDATES=1";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>


