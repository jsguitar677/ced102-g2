<?php

include("getMemInfoFIX.php");

try{
    // require_once("connect.php");
  require_once("../../connect_ced102g2.php");

    $pdoo="SELECT b.ACTNAME, b.VISION , c.LOCPIC , b.ACTNO
           FROM `eventc` a join `actv` b on a.ACTNO = b.ACTNO
                         join `location` c on b.ACTLOC = c.LOCNAME
           WHERE a.MBRNO =:MBRNO";

    $memberData2 = $pdo->prepare($pdoo);
    $memberData2->bindValue(":MBRNO", $_SESSION["MBRNO"]);
    $memberData2->execute();

    // // 資料庫取回的資料
    $memRow = $memberData2->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($memRow); 

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}


?>