<?php
try{
  require_once("../../connect_ced102g2.php");
  $sql = "select a.ACTNO, a.MBRNO, m.MBRNAME, a.LACHDATE, a.ACTNAME , a.ACTSDATE, a.ACTPIC , a.ACTDLINE , a.ACTSTAT , a.VISION , a.ACTCON , concat(city.CITYNAME,city.LOCNAME) LOC , a.DNTGOAL , a.DNTNOW , a.RECRGOAL , a.RECRNOW , a.CANPROP from actv a join mbr m on a.MBRNO = m.MBRNO join (select l.CITYNO , c.CITYNAME , l.LOCNAME from city c join location l on c.CITYNO = l.CITYNO) city on a.ACTLOC = city.LOCNAME";
  $updatestatus_ccl = "update actv set ACTSTAT =:actstat where ACTNO =:actno";
  $updatestatus_add = "update actv set ACTSTAT =:actstat where ACTNO =:actno";
  $update_exp_sql = "update mbr set MBREXP = :mbrexp where MBRNO = :mbrno";
  $choose_sql = "select MBRNO from actv where ACTNO = :actno";
  $original_exp_sql = "select MBRNO , MBREXP from mbr where MBRNO = :mbrno";
  $actv = $pdo->prepare($sql);
  $actv->execute();

  if( $actv->rowCount() == 0 ){
    echo "{}";
  }else{
    $actvRow = $actv->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($actvRow);
  }	

    //取消案件通過與否
    if(isset($_GET["cclactno"])){
        $act_ccl = $pdo->prepare($updatestatus_ccl);
        $act_ccl->bindValue(":actno",$_GET["cclactno"]);
        $act_ccl->bindValue(":actstat",$_GET["cancelact"]);
        $act_ccl->execute();
    }else{
        // echo"無提供，故無法刪除<br>";
    }

    //新案件通過與否
    if(isset($_GET["addactno"])){
        $act_add = $pdo->prepare($updatestatus_add);
        $act_add->bindValue(":actno",$_GET["addactno"]);
        $act_add->bindValue(":actstat",$_GET["addact"]);
        $act_add->execute();
        if($_GET["addact"] == "2"){
          // 找出活動發起人編號
          $chooseact = $pdo->prepare($choose_sql);
          $chooseact->bindValue(":actno",$_GET["addactno"]);
          $chooseact->execute();
          $chooser_row = $chooseact->fetch(PDO::FETCH_ASSOC);
          // 找出發起人原始經驗值
          $ori_exp = $pdo->prepare($original_exp_sql);
          $ori_exp->bindValue(":mbrno",$chooser_row["MBRNO"]);
          $ori_exp->execute();
          $ori_exp_row = $ori_exp->fetch(PDO::FETCH_ASSOC);
          // 提案通過更新發起人經驗
          $update_exp = $pdo->prepare($update_exp_sql);
          $update_exp->bindValue(":mbrno",$ori_exp_row["MBRNO"]);
          $update_exp->bindValue(":mbrexp",$ori_exp_row["MBREXP"]+100);
          $update_exp->execute();
        }
      }else{
          // echo"無提供，故無法刪除<br>";
      }


}catch(PDOException $e){
  echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
?>