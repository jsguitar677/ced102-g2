<?php
try{
    require_once('../../connect_ced102g2.php');
    //檢舉留言編號/檢舉日期/檢舉人編號/檢舉人姓名/留言編號/留言內容/檢舉原因/
    $sql = "select a.REPORTNO, a.COMMNO, a.MBRNO, a.RPTTPROC, a.RPTREASON, a.RPTDATE, b. from rpt a join mbr b on a.mbrno = b.mbrno order by rptdate desc"
    $delete = "delete from rpt where reportno =:reportno";
    $adm = $pdo->query($sql);

if(isset($_GET["admno"])){
  $adm_delete = $pdo->prepare($delete);
  $adm_delete->bindValue(":admno",$_GET["admno"]);
  $adm_delete->execute();
}else{
    // echo"無提供，故無法刪除<br>";
}

if(isset($_POST["admname"])){
    $adm_add = $pdo->prepare($add);
    $adm_add->bindValue(":admname",$_POST["admname"]);
    $adm_add->bindValue(":admacc",$_POST["admacc"]);
    $adm_add->bindValue(":admpws",$_POST["admpws"]);
    $adm_add->execute();
}else{
    // echo"無提供，故無法新增<br>";
}

if( $adm->rowCount() == 0 ){
  echo "{}";
}else{
  $admRow = $adm->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($admRow);
}	

}catch(PDOException $e){
echo"error:",$e->getMessage(),"****line:",$e->getLine(),"<br>";
}
// ?>