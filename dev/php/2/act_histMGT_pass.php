<?php
session_start();
try{
    require_once("../../connect_ced102g2.php");
    //編號 a.ACTNO		文章a.ACTCON	活動圖  a.ACTPIC1,ACTPIC2, ACTPIC3 a.AFTERACT
    //活動日期b.ACTSDATE	活動名稱b.ACTNAME	活動地點 b.ACTLOC  b.ACTV

    // $_POST['RESULT'] = "1234566";
    // $_POST['ACTNO'] = "10";
    // $sql = "update afteract set RESULT=:RESULT, ACTPIC1=:ACTPIC1, ACTPIC2=:ACTPIC2, ACTPIC3=:ACTPIC3 where ACTNO =:ACTNO";
    if(isset($_POST['RESULT'])){
        $sql = "update afteract set RESULT=:RESULT where ACTNO =:ACTNO";
        $modify = $pdo->prepare($sql);
        $modify->bindValue(":RESULT",$_POST['RESULT']);
        $modify->bindValue(":ACTNO",$_POST['ACTNO']);
        $modify->execute();
    }   
   
    if( $_FILES["upFile1"]["error"] == UPLOAD_ERR_OK){
        //  決定檔案名稱  1.主檔名  亂數產生主檔名
            $uniqid1 = uniqid();
            $pathinfoArr1 = pathinfo($_FILES["upFile1"]["name"]);
            $filename1 = "{$uniqid1}.{$pathinfoArr["extension"]}";  //2.副檔名
            //---先檢查images資料夾存不存在
            if( file_exists("../../img/act_hist") === false){
                mkdir("../../img/act_hist");
            }
        }else{
            echo "失敗";
        }
        
        $from1 = $_FILES["upFile1"]["tmp_name"];
        $to1 = "../../img/act_hist/$filename";
        if(copy($from1,$to1)){
            $saveFiless1 = "./img/act_hist/$filename1";
        
            $sql1 = " UPDATE `afteract` SET `ACTPIC1`= :saveFile WHERE `ACTNO` =:ACTNO " ;
            $pic1 = $pdo->prepare( $sql1 );
            $pic1 -> bindValue( ":saveFile" ,$saveFiless1);
            $pic1 -> bindValue( ":ACTNO" ,$_POST['ACTNO']);
            $pic1->execute();
            
        }else{
            echo "上傳照片失敗";
        }
    if( $_FILES["upFile2"]["error"] == UPLOAD_ERR_OK){
        //  決定檔案名稱  1.主檔名  亂數產生主檔名
            $uniqid2 = uniqid();
            $pathinfoArr2 = pathinfo($_FILES["upFile2"]["name"]);
            $filename2 = "{$uniqid2}.{$pathinfoArr2["extension"]}";  //2.副檔名
            //---先檢查images資料夾存不存在
            if( file_exists("../../img/act_hist") === false){
                mkdir("../../img/act_hist");
            }
        }else{
            echo "失敗";
        }
        
        $from2 = $_FILES["upFile2"]["tmp_name"];
        $to2 = "../../img/act_hist/$filename2";
        if(copy($from2,$to2)){
            $saveFiless2 = "./img/act_hist/$filename2";
        
            $sql2 = " UPDATE `afteract` SET `ACTPIC2`= :saveFile WHERE `ACTNO` =:ACTNO " ;
            $pic2 = $pdo->prepare( $sql2 );
            $pic2 -> bindValue( ":saveFile" ,$saveFiless2);
            $pic2 -> bindValue( ":ACTNO" ,$_POST['ACTNO']);
            $pic2->execute();
            
        }else{
            echo "上傳照片失敗";
        }
    if( $_FILES["upFile3"]["error"] == UPLOAD_ERR_OK){
        //  決定檔案名稱  1.主檔名  亂數產生主檔名
            $uniqid3 = uniqid();
            $pathinfoArr3 = pathinfo($_FILES["upFile3"]["name"]);
            $filename3 = "{$uniqid3}.{$pathinfoArr3["extension"]}";  //2.副檔名
            //---先檢查images資料夾存不存在
            if( file_exists("../../img/act_hist") === false){
                mkdir("../../img/act_hist");
            }
        }else{
            echo "失敗";
        }
        
        $from3 = $_FILES["upFile3"]["tmp_name"];
        $to3 = "../../img/act_hist/$filename3";
        if(copy($from3,$to3)){
            $saveFiless3 = "./img/act_hist/$filename3";
        
            $sql3 = " UPDATE `afteract` SET `ACTPIC3`= :saveFile WHERE `ACTNO` =:ACTNO " ;
            $pic3 = $pdo->prepare( $sql3);
            $pic3 -> bindValue( ":saveFile" ,$saveFiless3);
            $pic3 -> bindValue( ":ACTNO" ,$_POST['ACTNO']);
            $pic3->execute();
            
        }else{
            echo "上傳照片失敗";
        }


 


}catch(PDOException $e){
    echo "error",$e->getMessage(),"****line",$e->getLine(),"<br>";
}



?>