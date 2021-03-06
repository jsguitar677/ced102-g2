<?php
include("getMemInfoFIX.php");
// require_once("connect.php");
require_once("../../connect_ced102g2.php");

try{
    $PDOO = "SET SQL_SAFE_UPDATES=0";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();

    // $MBRDATA=" UPDATE `actv` SET ADDDATE(actsdate,interval 14 day)  WHERE MBRNO=:MBRNO and ACTNO=:ACTNO";
    $MBRDATA="UPDATE `actv` SET `actdline`= ADDDATE(`actdline`,interval 14 day), `actstat` = 5 WHERE MBRNO=:MBRNO  and ACTNO=:ACTNO";
    // $MBRDATA2=" SELECT `actv` SET `actsdate`= ADDDATE(`actsdate`,interval 14 day) WHERE MBRNO=:MBRNO  and ACTNO=:ACTNO";
    $MBRDATA2="SELECT `actdline` FROM `actv` WHERE MBRNO=:MBRNO  and ACTNO=:ACTNO";

    //  UPDATE `actv` SET `actsdate`= ADDDATE(`actsdate`,interval 14 day)  WHERE 1 and 1 ;
   

    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO",  $_SESSION["MBRNO"]);
    $memberData->bindValue(":ACTNO", $_POST["ACTNOO"]);
    $memberData->execute();

    $memberData2 = $pdo->prepare($MBRDATA2);
    $memberData2->bindValue(":MBRNO",  $_SESSION["MBRNO"]);
    $memberData2->bindValue(":ACTNO", $_POST["ACTNOO"]);
    $memberData2->execute();

    // // 資料庫取回的資料
    $memRow = $memberData2->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($memRow); 

    $PDOO = "SET SQL_SAFE_UPDATES=1";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>


