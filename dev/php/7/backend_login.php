<?php
session_start();
try{
    require_once("../../connect_ced102g2.php");
    $sql = "select ADMNO, ADMNAME, ADMACC from adm where ADMACC =:admacc and ADMPSW =:admpsw";

    $adm = $pdo->prepare($sql);
    $adm->bindValue(":admacc",$_POST["admacc"]);
    $adm->bindValue(":admpsw",$_POST["admpsw"]);
    $adm->execute();

    if( $adm->rowCount() == 0 ){
        echo "{}";
    }else{
        $admRow = $adm->fetchAll(PDO::FETCH_ASSOC);
        $_SESSION["admno"] = $admRow[0]["ADMNO"];
        $_SESSION["admname"] = $admRow[0]["ADMNAME"];
        echo json_encode($admRow);
    }	

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>