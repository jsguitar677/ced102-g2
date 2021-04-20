<?php
require_once("connect.php");
try{
    $MBRDATA="DELETE FROM eventc WHERE ACTNO =:ACTNO";

    $memberData = $pdo->prepare($MBRDATA);
    $memberData->bindValue(":ACTNO", $_POST["ACTID"]);
    $memberData->execute();

    // 資料庫取回的資料
    
    // echo '已刪除資料'; 


}catch(PDOException $e){

    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>


