<?php
include("getMemInfoFIX.php");

// require_once("connect.php");
require_once("../../connect_ced102g2.php");

try{
    $PDOO = "SET SQL_SAFE_UPDATES=0";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();

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
    
        $sql = " UPDATE `mbr` SET `MBRPIC`= :saveFile WHERE `MBRNO` =:MBRNO " ;
        $products = $pdo->prepare( $sql );
        $products -> bindValue( ":saveFile" ,$saveFiless);
        $products -> bindValue( ":MBRNO" ,$_SESSION["MBRNO"]);
        $products->execute();
        
        // $_SESSION["MBRPIC"] = $products["MBRPIC"];


    }else{
        echo "上傳照片失敗";
    }

   
    if (isset($_POST['contact_intro'])) {
        $sql = " UPDATE `mbr` SET `MBRBIO`= :intro WHERE `MBRNO` =:MBRNO " ;

        $products = $pdo->prepare( $sql );
        $products -> bindValue( ":intro",$_POST['contact_intro']);
        $products -> bindValue( ":MBRNO" ,$_SESSION["MBRNO"]);
        $products->execute();
    }


    $PDOO = "SET SQL_SAFE_UPDATES=1";
    $memberData = $pdo->prepare($PDOO);
    $memberData->execute();
    
    echo "<script>window.history.back()</script>"; 
    // echo $saveFiless;

}catch(PDOException $e){
    echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>


