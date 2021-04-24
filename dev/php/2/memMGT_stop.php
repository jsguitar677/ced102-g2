<?php
session_start();
try{
    require_once("../../connect_ced102g2.php");
    // $mbrno = $_GET["mbrno"];
    // $stopMbrno = $_GET["stopConfirm"];
    //接收停權帳號
    $sql = "update mbr set mbrstat =:mbrstat where mbrno =:mbrno ";
    $stop = $pdo->prepare($sql);
    $stop->bindValue(":mbrstat",$_GET["mbrstat"]);
    $stop->bindValue(":mbrno",$_GET["mbrno"]);
    $stop->execute();
    if( $stop->rowCount()==0){ //查無此人
        echo "{}";
    }else{ //登入成功
    //   //自資料庫中取回資料
    //     $stopRow = $stop->fetchAll(PDO::FETCH_ASSOC);
    //     print_r($stopRow);
    //   //登入成功將所需儲存的狀態值存入session中
    //   $_SESSION["mbrno"] = $stopRow["mbrno"];
    //   $_SESSION["mbrstat"] = $stopRow["mbrstat"];
    //   $result = ["mbrno"=>$stopRow["mbrno"], "mbrstat"=>$stopRow["stopConfirm"]];
    //   echo json_encode($stopRow);
    }
    //輸出json
}catch(PDOException $e){
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>