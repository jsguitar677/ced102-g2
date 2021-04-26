<?php
include("getMemInfoFIX.php");

try{
    // require_once("connect.php");
  require_once("../../connect_ced102g2.php");

    $MBRDATA=" SELECT MBREXP, MBRCOIN, DONATE, PARTICIPATE FROM mbr WHERE MBRNO = :MBRNO";
    $ACTV=" SELECT COUNT(MBRNO) FROM actv WHERE MBRNO = :MBRNO";
    $FUNDRA=" SELECT COUNT(MBRNO) FROM fundra WHERE MBRNO = :MBRNO";

    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData->execute();

    $memberData2 = $pdo->prepare($ACTV);
    $memberData2->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData2->execute();

    $memberData3 = $pdo->prepare($FUNDRA);
    $memberData3->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData3->execute();

    // 資料庫取回的資料
    $memRow = $memberData->fetch(PDO::FETCH_ASSOC);
    $memRow2 = $memberData2->fetch(PDO::FETCH_ASSOC);
    $memRow3 = $memberData3->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode([$memRow,$memRow2,$memRow3]); 


}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>