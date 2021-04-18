<?php
try{
    echo 1;
    require_once("connect.php");
    $pdoO="SELECT MBRBIRTH, MBRBIO, MBRPIC FROM mbr WHERE MBRNO =:MBRNO";

    $memberData = $pdo->prepare($pdoO);
    $memberData->bindValue(":MBRNO", $_POSTP["MBRNO"]);
    $memberData->execute();

    // // 資料庫取回的資料
    $memRow = $memberData->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($memRow); 

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>