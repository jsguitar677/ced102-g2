<?php
include("getMemInfoFIX.php");

try{
    require_once("connect.php");
     
    $PDOO = "SET SQL_SAFE_UPDATES=0";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();

    $MBRDATA=" UPDATE mbr SET MBRCOINLV = MBRCOINLV + 1 WHERE MBRNO = :MBRNO";
    $MBRDATA2 =" SELECT MBRCOINLV FROM mbr WHERE MBRNO = :MBRNO";

    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData->execute();

    $memberData2 = $pdo->prepare($MBRDATA);
    $memberData2->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData2->execute();

    // 資料庫取回的資料
    $memRow = $memberData2->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($memRow); 

    $PDOO = "SET SQL_SAFE_UPDATES=1";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>