<?php
include("getMemInfoFIX.php");

try{
    // require_once("connect.php");
  require_once("../../connect_ced102g2.php");

     
    $PDOO = "SET SQL_SAFE_UPDATES=0";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();

    $MBRDATA=" UPDATE mbr SET MBRCOINLV = MBRCOINLV + 1 , MBRCOIN = MBRCOIN+ 50 WHERE MBRNO = :MBRNO";
    $MBRDATA2 =" SELECT MBRCOINLV , MBRCOIN FROM mbr WHERE MBRNO = :MBRNO";

    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData->execute();

    $memberData2 = $pdo->prepare($MBRDATA2);
    $memberData2->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData2->execute();

    // 資料庫取回的資料
    $memRow = $memberData2->fetch(PDO::FETCH_ASSOC);
    // $_SESSION["MBRNO"] = $memRow["MBRNO"];

    $_SESSION["MBRCOIN"] = $memRow["MBRCOIN"];

    echo json_encode($memRow); 

    $PDOO = "SET SQL_SAFE_UPDATES=1";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>