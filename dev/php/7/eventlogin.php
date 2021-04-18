<?php
session_start();
$_SESSION["mbrno"] = "1";
try{
    require_once("../../connect_ced102g2.php");
    $mbrinfo_sql = "select MBRNO , MBREXP from mbr where MBRNO = :mbrno";

    if(isset( $_SESSION["mbrno"])){
        $mbrinfo = $pdo->prepare($mbrinfo_sql);
        $mbrinfo->bindValue(":mbrno",$_SESSION["mbrno"]);
        $mbrinfo->execute(); //取得會員編號、會員經驗值
        if( $mbrinfo->rowCount() == 0 ){
            echo json_encode(['nologin']);
        }else{
            $mbrinfoRow = $mbrinfo->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($mbrinfoRow);
        }	
    }else{
        echo json_encode(['nologin']);
    }


}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>