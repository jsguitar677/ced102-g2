<?php

include("getMemInfoFIX.php");

try{
    require_once("connect.php");
    $pdoo="SELECT b.actname, b.vision , c.locpic ,b.actno
           FROM eventc a join actv b on a.actno = b.actno
                         join `location` c on b.actloc = c.locname
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