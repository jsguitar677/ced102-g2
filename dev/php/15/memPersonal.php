<?php
 include("getMemInfoFIX.php");

try{
    require_once("connect.php");
    $pdoO="SELECT MBRNAME, MBRBIRTH, MBRPIC, MBRBIO FROM mbr WHERE MBRNO =:MBRNO";

    $memberData = $pdo->prepare($pdoO);
    $memberData->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData->execute();

    // // 資料庫取回的資料
    $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($memRow); 

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>