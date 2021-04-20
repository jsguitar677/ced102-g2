<?php
session_start();
// $_SESSION["MBRNO"] = 1;
try{
    require_once("../../connect_ced102g2.php");
    $mbrinfo_sql = "select MBRNO , MBRNAME , DONATE , PARTICIPATE , MBREXP from mbr where MBRNO = :mbrno";
    $actinfo_sql = "select ACTNO , ACTNAME from actv where ACTNO = :actno";
    $both_update_sql = "update mbr set DONATE= :donate , PARTICIPATE = :participate , MBREXP = :mbrexp where MBRNO = :mbrno";
    $donate_update_sql = "update mbr set DONATE = :donate , MBREXP = :mbrexp where MBRNO = :mbrno";
    $participate_update_sql = "update mbr set PARTICIPATE = :participate , MBREXP = :mbrexp where MBRNO = :mbrno";
    $fundra_add_sql = "insert into `fundra` ( MBRNO , ACTNO , AMOUNT , FUNDDATE , CARDNO) values ( :mbrno , :actno , :amount , curdate(), :cardno )";
    $actvap_add_sql = "insert into `actvap` ( MBRNO , ACTNO , cellphone , emcon , emrnumber) values ( :mbrno , :actno , :cellphone , :emcon , :emrnumber )";
    $check_sql = "select MBRNO from actvap where MBRNO = :mbrno and ACTNO = :actno";

    $mbrinfo = $pdo->prepare($mbrinfo_sql);
    $mbrinfo->bindValue(":mbrno",$_SESSION["MBRNO"]);
    $mbrinfo->execute(); //取得會員編號、姓名、DONATE、PARTICIPATE

    $actinfo = $pdo->prepare($actinfo_sql);
    $actinfo->bindValue(":actno",$_GET["actno"]);
    $actinfo->execute(); //取得活動名稱及編號

    $check = $pdo->prepare($check_sql);
    $check->bindValue(":mbrno",$_SESSION["MBRNO"]);
    $check->bindValue(":actno",$_GET["actno"]);
    $check->execute(); //查看是否重複報名

    if( $mbrinfo->rowCount() == 0 ){
        echo "{}";
    }else{
        $mbrinfoRow = $mbrinfo->fetchAll(PDO::FETCH_ASSOC);
        $actinfoRow = $actinfo->fetchAll(PDO::FETCH_ASSOC);
        $checkRow = $check->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode([$mbrinfoRow,$actinfoRow,$checkRow]);

    }	

    // 1捐款 2志工 3兩者
    if(isset($_POST["choose"])){
        $x = $mbrinfoRow[0]["PARTICIPATE"] + 1; 
        if($_POST["choose"] == 1){
            $y = $mbrinfoRow[0]["DONATE"] + $_POST["amount"];
            $exp_f = $mbrinfoRow[0]["MBREXP"] + floor($_POST["amount"]/100)*5;
            $fundra_add = $pdo->prepare($fundra_add_sql);
            $fundra_add->bindValue(":mbrno",$_SESSION["MBRNO"]);
            $fundra_add->bindValue(":actno",$_POST["actno"]);
            $fundra_add->bindValue(":amount",$_POST["amount"]);
            $fundra_add->bindValue(":cardno",$_POST["cardno"]);
            $fundra_add->execute();

            $donate_update = $pdo->prepare($donate_update_sql);
            $donate_update->bindValue(":mbrno",$_SESSION["MBRNO"]);
            $donate_update->bindValue(":mbrexp",$exp_f);
            $donate_update->bindValue(":donate",$y);
            $donate_update->execute();
          }elseif($_POST["choose"] == 2){
            $exp_v = $mbrinfoRow[0]["MBREXP"] + 25;
            $actvap_add = $pdo->prepare($actvap_add_sql);
            $actvap_add->bindValue(":mbrno",$_SESSION["MBRNO"]);
            $actvap_add->bindValue(":actno",$_POST["actno"]);
            $actvap_add->bindValue(":cellphone",$_POST["cellphone"]);
            $actvap_add->bindValue(":emcon",$_POST["emcon"]);
            $actvap_add->bindValue(":emrnumber",$_POST["emrnumber"]);
            $actvap_add->execute();

            $participate_update = $pdo->prepare($participate_update_sql);
            $participate_update->bindValue(":mbrno",$_SESSION["MBRNO"]);
            $participate_update->bindValue(":participate",$x);
            $participate_update->bindValue(":mbrexp",$exp_v);
            $participate_update->execute();
          }elseif($_POST["choose"] == 3){
            $exp_both = $mbrinfoRow[0]["MBREXP"] + floor($_POST["amount"]/100)*5 +25;
            $y = $mbrinfoRow[0]["DONATE"] + $_POST["amount"];
            $fundra_add = $pdo->prepare($fundra_add_sql);
            $fundra_add->bindValue(":mbrno",$_SESSION["MBRNO"]);
            $fundra_add->bindValue(":actno",$_POST["actno"]);
            $fundra_add->bindValue(":amount",$_POST["amount"]);
            $fundra_add->bindValue(":cardno",$_POST["cardno"]);
            $fundra_add->execute();

            $actvap_add = $pdo->prepare($actvap_add_sql);
            $actvap_add->bindValue(":mbrno",$_SESSION["MBRNO"]);
            $actvap_add->bindValue(":actno",$_POST["actno"]);
            $actvap_add->bindValue(":cellphone",$_POST["cellphone"]);
            $actvap_add->bindValue(":emcon",$_POST["emcon"]);
            $actvap_add->bindValue(":emrnumber",$_POST["emrnumber"]);
            $actvap_add->execute();

            $both_update = $pdo->prepare($both_update_sql);
            $both_update->bindValue(":mbrno",$_SESSION["MBRNO"]);
            $both_update->bindValue(":donate",$y);
            $both_update->bindValue(":participate",$x);
            $both_update->bindValue(":mbrexp",$exp_both);
            $both_update->execute();
         }
    };


}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>