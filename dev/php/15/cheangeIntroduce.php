<?php
include("getMemInfoFIX.php");

// require_once("connect.php");
require_once("../../connect_ced102g2.php");

try{
    

    //.......確定是否上傳成功
    if( $_FILES["upFile"]["error"] == UPLOAD_ERR_OK){
    //  決定檔案名稱  1.主檔名  亂數產生主檔名
        $uniqid = uniqid();
        $pathinfoArr = pathinfo($_FILES["upFile"]["name"]);
        $filename = "{$uniqid}.{$pathinfoArr["extension"]}";  //2.副檔名
        //---先檢查images資料夾存不存在
        if( file_exists("../../img/mbr/PropicCustomer") === false){
            mkdir("../../img/mbr/PropicCustomer");
        }
    }else{
        echo "失敗";
    }
    
    $from = $_FILES["upFile"]["tmp_name"];
    $to = "../../img/mbr/PropicCustomer/$filename";
    if(copy($from,$to)){
        $saveFiless = "./img/mbr/PropicCustomer/$filename";
    
        $PDOO = "SET SQL_SAFE_UPDATES=0";
        $memberData = $pdo->prepare($PDOO);
        $memberData->execute();
    
        $sql = " UPDATE `mbr` SET `MBRPIC`= :saveFile WHERE `MBRNO` =:MBRNO " ;
        $sql2 = "SELECT MBRPIC from mbr WHERE `MBRNO` =:MBRNO " ;

        $products = $pdo->prepare($sql);
        $products -> bindValue( ":saveFile" ,$saveFiless);
        $products -> bindValue( ":MBRNO" ,$_SESSION["MBRNO"]);
        $products->execute();


        $products2 = $pdo->prepare($sql2);
        $products2 ->bindValue( ":MBRNO" ,$_SESSION["MBRNO"]);
        $products2->execute();

        $memRow = $products2->fetch(PDO::FETCH_ASSOC);
        $_SESSION["MBRPIC"] = $memRow["MBRPIC"];
    
    

        
    
        $PDOO = "SET SQL_SAFE_UPDATES=1";
        $memberData = $pdo->prepare($PDOO);
        $memberData->execute();
    }else{
        echo "失敗";
    }

   


    echo "<script>window.history.back()</script>";
    // $id('memBIO').textContent = MBRPERID[0].MBRBIO;

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>


