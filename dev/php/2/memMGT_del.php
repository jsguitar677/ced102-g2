<?php
// session_start();
try{
    require_once("../../connect_ced102g2.php");
    $sql = "del from mbr where mbrno=?";
    echo $_GET["mbrno"];
    $stop = $pdo->prepare($sql);
    $stop->bindValue(1,$_GET["mbrno"]);
    $stop->execute();
    if( $stop->rowCount()==0){ //查無此人
        echo "{}";
    }else{ //登入成功
  
    }
    //輸出json
}catch(PDOException $e){
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>